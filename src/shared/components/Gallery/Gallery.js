import React from 'react';
import { Match, Miss } from 'react-router';
import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';
import 'normalize.css/normalize.css';
import './globals.css';
import Error404 from '../Error404';
import Header from './Header';
import Home from './Home';
import { safeConfigGet } from '../../utils/config';

function Gallery() {
  return (
    <div style={{ padding: '10px' }}>
      <Helmet
        htmlAttributes={safeConfigGet(['htmlPage', 'htmlAttributes'])}
        titleTemplate={safeConfigGet(['htmlPage', 'titleTemplate'])}
        defaultTitle={safeConfigGet(['htmlPage', 'defaultTitle'])}
        meta={safeConfigGet(['htmlPage', 'meta'])}
        link={safeConfigGet(['htmlPage', 'links'])}
        script={safeConfigGet(['htmlPage', 'scripts'])}
      />

      <Header />

      <Match
        exactly
        pattern="/"
        render={routerProps =>
          <CodeSplit chunkName="home" modules={{ Home: require('./Home') }}>
            { ({ Home }) => Home && <Home {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/graphD3"
        render={routerProps =>
          <CodeSplit chunkName="graphD3" modules={{ GraphD3: require('./GraphD3') }}>
            { ({ GraphD3 }) => GraphD3 && <GraphD3 {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/mapbox"
        render={routerProps =>
          <CodeSplit chunkName="mapbox" modules={{ MapBox: require('./MapBox') }}>
            { ({ MapBox }) => MapBox && <MapBox {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/sigmajs"
        render={routerProps =>
          <CodeSplit chunkName="sigmajs" modules={{ SigmaJs: require('./SigmaJs') }}>
            { ({ SigmaJs }) => SigmaJs && <SigmaJs {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/alchemy"
        render={routerProps =>
          <CodeSplit chunkName="alchemy" modules={{ Alchemy: require('./Alchemy') }}>
            { ({ Alchemy }) => Alchemy && <Alchemy {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/chartJs"
        render={routerProps =>
          <CodeSplit chunkName="chartJs" modules={{ ChartJs: require('./ChartJs') }}>
            { ({ ChartJs }) => ChartJs && <ChartJs {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/plotly"
        render={routerProps =>
          <CodeSplit chunkName="plotly" modules={{ Plotly: require('./Plotly') }}>
            { ({ Plotly }) => Plotly && <Plotly {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Match
        exactly
        pattern="/popoto"
        render={routerProps =>
          <CodeSplit chunkName="popoto" modules={{ Popoto: require('./Popoto') }}>
            { ({ Popoto }) => Popoto && <Popoto {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Miss component={Error404} />
    </div>
  );
}

export default Gallery;
