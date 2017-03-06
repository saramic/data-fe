import React from 'react';
import { Match, Miss } from 'react-router';
import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';
import 'normalize.css/normalize.css';
import './globals.css';
import Error404 from '../Error404';
import Header from './Header';
import Home from './Home';
import GraphD3 from './GraphD3';
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
        pattern="/pubnubEon"
        render={routerProps =>
          <CodeSplit chunkName="pubnubEon" modules={{ PubnubEon: require('./PubnubEon') }}>
            { ({ PubnubEon }) => PubnubEon && <PubnubEon {...routerProps} /> }
          </CodeSplit>
        }
      />

      <Miss component={Error404} />
    </div>
  );
}

export default Gallery;
