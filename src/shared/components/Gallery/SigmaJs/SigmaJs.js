import React from 'react';

const graph = {
  "nodes": [
    {
      "id": "n0",
      "label": "A node",
      "x": 0,
      "y": 0,
      "size": 3
    },
    {
      "id": "n1",
      "label": "Another node",
      "x": 3,
      "y": 1,
      "size": 2
    },
    {
      "id": "n2",
      "label": "And a last one",
      "x": 1,
      "y": 3,
      "size": 1
    }
  ],
  "edges": [
    {
      "id": "e0",
      "source": "n0",
      "target": "n1"
    },
    {
      "id": "e1",
      "source": "n1",
      "target": "n2"
    },
    {
      "id": "e2",
      "source": "n2",
      "target": "n0"
    }
  ]
};


class SigmaJsSub extends React.Component {
  constructor(props) {
    super();
    this.state = { server: true, hasWindow: props.hasWindow }
  }
  render() {
    if(!this.state.hasWindow) {
      return(<div>loading ...</div>);
    } else {
      const { Sigma, RandomizeNodePositions, RelativeSize, LoadJSON } = require('react-sigma');
      //const {Sigma, EdgeShapes, NodeShapes, LoadJSON, LoadGEXF, Filter, ForceAtlas2,
      //  RelativeSize, NOverlap, NeoCypher, NeoGraphItemsProducers,
      //  RandomizeNodePositions, SigmaEnableWebGL} = require('react-sigma');
      // TODO following errors with
      // VM8232:2 GET http://localhost:1337/data/sigma_graph.json net::ERR_CONNECTION_REFUSED
      //  <Sigma style={{width:"200px", height:"200px"}}>
      //    <LoadJSON path="/data/sigma_graph.json" />
      //  </Sigma>
      //
      // TODO make filterNeigbours and worker work
      //    <Sigma renderer="canvas">
      //      <EdgeShapes default="tapered"/>
      //      <NodeShapes default="star"/>
      //      <LoadGEXF path="/data/les-miserables.gexf">
      //        <Filter neighborsOf={ this.state.filterNeighbours } />
      //        <ForceAtlas2 worker barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
      //        <RelativeSize initialSize={15}/>
      //      </LoadGEXF>
      //    </Sigma>
      return (
        <div>
          need a string here?
          <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges:true}}>
              <RelativeSize initialSize={15}/>
              <RandomizeNodePositions/>
          </Sigma>
        </div>
      );
    }
  }
}

class SigmaJs extends React.Component {
  constructor() {
    super();
    this.state = { isServer: true };
  }

  componentDidMount() {
    this.setState({ isServer: false });
  }

  get sigmaComponent() {
    const { Sigma, RandomizeNodePositions, RelativeSize } = require('react-sigma');
    return <Sigma graph={graph} settings={{drawEdges:true}}> <RelativeSize initialSize={15}/></Sigma>;
  }

  render() {
    return (
      <div>
        <a href="http://sigmajs.org/">SigmaJs</a> is an option in the graph space
        { !this.state.isServer && this.sigmaComponent }
        { !this.state.isServer && (<SigmaJsSub hasWindow="true" />) }
        <SigmaJsSub />
      </div>
    );
  }
}

export default SigmaJs;
