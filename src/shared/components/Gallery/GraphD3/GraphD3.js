import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs/ssr';
import Helmet from 'react-helmet';
import * as AsxDataActions from '../../../actions/asxData';
import * as FromState from '../../../reducers';
import type { AsxData as AsxDataType } from '../../../types/model';
import { LineChart } from 'react-d3-basic';

type Props = {
  asxData: ?AsxDataType,
};
function GraphD3({ asxData } : Props) {
  if (!asxData[0]) { // TODO drop the [0]
    // not fetched yet
    return null;
  }

  const chartData = asxData[0]; // TODO fix this as it is off by 1 index
  const width = 700;
  const height = 300;
  const margins = {left: 100, right: 100, top: 50, bottom: 50};
  const title = "User sample";
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
  const chartSeries = [
    {
      field: 'Close',
      name: 'Close',
      color: '#ff7f0e'
    }
  ];
  // your x accessor
  const x = function(d) {
    return new Date(d.Date);
  }
  const xScale = 'time'
  return (
      <div>
        <LineChart
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
        />
      </div>
  );
}

function mapStateToProps(state) {
  return {
    asxData: FromState.getAsxData(state),
  };
}

const mapActionsToProps = {
  fetchAsxData: AsxDataActions.fetch,
};

export default compose(
  connect(mapStateToProps, mapActionsToProps),
  withJob(
    ({ params , asxData, fetchAsxData }) => {
      if (asxData[0]) { // TODO keyed off to first element shoudl drop [0]
        return true;
      }
      return fetchAsxData();
    },
    {
      shouldWorkAgain: (prevProps, nextProps) =>
        prevProps.params.id !== nextProps.params.id,
    },
  ),
)(GraphD3);
