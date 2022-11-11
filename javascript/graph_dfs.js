function isPath(graph, vertexA, vertexB, visited = new Set()) {
  if (graph[vertexA].length === 0) {
		return false;
	}

	visited.add(vertexA);

	if (graph[vertexA].includes(vertexB)) {
		return true;
	} else {
		// return !!graph[vertexA].find((vertex) => isPath(graph, vertex, vertexB));
		return !!graph[vertexA].find((vertex) => {
			if (!visited.has(vertex)) {
				return isPath(graph, vertex, vertexB, visited);
			}
		});
	}
}

if (require.main === module) {
  // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["jan", "carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "dave"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * Check if A's adjacency list includes B
 * If yes, return true
 * If not, for each element in A's adjacency list, check if element's adjacency list includes B
 * If element's adjacency list is empty, return falsey value
 */
