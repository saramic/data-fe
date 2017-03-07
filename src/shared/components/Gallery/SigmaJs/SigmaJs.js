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
  render() {
    const { Sigma, RandomizeNodePositions, RelativeSize } = require('react-sigma');
    return (
      <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges:true}}>
          <RelativeSize initialSize={15}/>
          <RandomizeNodePositions/>
      </Sigma>
    );
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
        { !this.state.isServer && (<SigmaJsSub />) }
      </div>
    );
  }
}

export default SigmaJs;
