/**
 * generates the specified number of nodes and edges
 * @param {*} nodeLength node number
 * @param {*} linkLength edge number
 */
function createGraphData(nodeLength, linkLength) {
    const nodes = Array.from(Array(nodeLength), (v, k) => ({
        data: {
            id: k.toString(),
        },
    }))
    const existsIds = {}
    const edges = []

    while (edges.length < linkLength) {
        const source = nodes[Math.floor(Math.random() * nodes.length)].data.id
        const target = nodes[Math.floor(Math.random() * nodes.length)].data.id
        const readyAddId = `${source}-${target}`

        if (!existsIds[readyAddId]) {
            edges.push({
                data: {
                    source,
                    target,
                    id: readyAddId,
                }
            })
            existsIds[readyAddId] = true
        }
    }

    return {
        nodes,
        edges,
    }
}

// createGraphData(2000, 2000)

// 2000 nodes and 2000 edges can be generated by above function
const elements = createGraphData(3000, 3000)
