let response = {
  statusCode: 200,
  body: {
    StageAnalysis: {
      schema: {
        fields: [
          {
            name: 'index',
            type: 'integer',
          },
          {
            name: 'period',
            type: 'datetime',
          },
          {
            name: 'stage',
            type: 'string',
          },
          {
            name: 'openrevenue',
            type: 'number',
          },
          {
            name: 'closedrevenue',
            type: 'number',
          },
          {
            name: 'stageconversion',
            type: 'number',
          },
        ],
        primaryKey: ['index'],
        pandas_version: '1.4.0',
      },
      data: [
        {
          index: 0,
          period: '2022-10-01T00:00:00.000',
          stage: 'Approvals',
          openrevenue: 99690,
          closedrevenue: 99690,
          stageconversion: 1,
        },
        {
          index: 1,
          period: '2023-01-01T00:00:00.000',
          stage: 'Negotiation',
          openrevenue: 210679.22,
          closedrevenue: 55779.22,
          stageconversion: 0.2647,
        },
        {
          index: 2,
          period: '2023-01-01T00:00:00.000',
          stage: 'Decision',
          openrevenue: 187945,
          closedrevenue: 137970,
          stageconversion: 0.734,
        },
        {
          index: 3,
          period: '2022-10-01T00:00:00.000',
          stage: 'Negotiation',
          openrevenue: 471606.27,
          closedrevenue: 243106.27,
          stageconversion: 0.5154,
        },
        {
          index: 4,
          period: '2022-10-01T00:00:00.000',
          stage: 'Decision',
          openrevenue: 280320,
          closedrevenue: 170320,
          stageconversion: 0.6075,
        },
        {
          index: 5,
          period: '2022-10-01T00:00:00.000',
          stage: 'Proposal',
          openrevenue: 941571.5,
          closedrevenue: 137284,
          stageconversion: 0.1458,
        },
        {
          index: 6,
          period: '2023-01-01T00:00:00.000',
          stage: 'Approvals',
          openrevenue: 49845,
          closedrevenue: 49845,
          stageconversion: 1,
        },
      ],
    },
    mean: {
      Approvals: 1,
      Decision: 0.67075,
      Negotiation: 0.39005,
      Proposal: 0.1458,
    },
    min: {
      Approvals: 1,
      Decision: 0.6075,
      Negotiation: 0.2647,
      Proposal: 0.1458,
    },
    max: {
      Approvals: 1,
      Decision: 0.734,
      Negotiation: 0.5154,
      Proposal: 0.1458,
    },
    'Open Pipeline': {
      Approvals: 10000,
      Decision: 20202,
      Negotiation: 40004,
      Proposal: 4498,
    },
  },
  Pulled: {
    schema: {
      fields: [
        {
          name: 'index',
          type: 'integer',
        },
        {
          name: 'period',
          type: 'datetime',
        },
        {
          name: 'value',
          type: 'number',
        },
      ],
      primaryKey: ['index'],
      pandas_version: '1.4.0',
    },
    data: [
      {
        index: 0,
        period: '2022-10-01T00:00:00.000',
        value: 0,
      },
      {
        index: 1,
        period: '2023-01-01T00:00:00.000',
        value: 440000,
      },
    ],
  },
  PulledTable: {
    min: 0,
    max: 440000,
    avg: 220000,
  },
  Created: {
    schema: {
      fields: [
        {
          name: 'index',
          type: 'integer',
        },
        {
          name: 'period',
          type: 'datetime',
        },
        {
          name: 'value',
          type: 'number',
        },
      ],
      primaryKey: ['index'],
      pandas_version: '1.4.0',
    },
    data: [
      {
        index: 0,
        period: '2023-01-01T00:00:00.000',
        value: 25000,
      },
      {
        index: 1,
        period: '2022-10-01T00:00:00.000',
        value: 146947.37,
      },
    ],
  },
  CreatedTable: {
    min: 25000,
    max: 146947.37,
    avg: 85973.685,
  },
  ForecastData: {
    PulledForecast: 220000,
    CreatedForecast: 85973.685,
    ClosedForecast: 91200,
    ForecastForecast: 707724.0833333334,
  },
};

let forecastData = response.ForecastData;
let createdTable = response.CreatedTable;
let pulledTable = response.PulledTable;

let pulledForecast = document.querySelector('.PulledForecast');
let createdForecast = document.querySelector('.CreatedForecast');
let closedForecast = document.querySelector('.ClosedForecast');
let forecastForecast = document.querySelector('.ForecastForecast');

pulledForecast.textContent =
  '$ ' +
  forecastData.PulledForecast.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
createdForecast.textContent =
  '$ ' +
  forecastData.CreatedForecast.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
closedForecast.textContent =
  '$ ' +
  forecastData.ClosedForecast.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
forecastForecast.textContent =
  '$ ' +
  forecastData.ForecastForecast.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });

let pulledTablemin = document.querySelector('.PulledTable .min p');
let pulledTableavg = document.querySelector('.PulledTable .avg p');
let pulledTablemax = document.querySelector('.PulledTable .max p');
let pulledVal = document.querySelector('.PulledTable .pulled input');
pulledTablemin.textContent =
  '$ ' +
  pulledTable.min.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
pulledTableavg.textContent =
  '$ ' +
  pulledTable.avg.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
pulledTablemax.textContent =
  '$ ' +
  pulledTable.max.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
pulledVal.value = pulledTable.avg + ''.replace('$', '');

let createdTablemin = document.querySelector('.CreatedTable .min p');
let createdTableavg = document.querySelector('.CreatedTable .avg p');
let createdTablemax = document.querySelector('.CreatedTable .max p');
let createdVal = document.querySelector('.CreatedTable .created input');

createdTablemin.textContent =
  '$ ' +
  createdTable.min.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
createdTableavg.textContent =
  '$ ' +
  createdTable.avg.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
createdTablemax.textContent =
  '$ ' +
  createdTable.max.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
createdVal.value = createdTable.avg + ''.replace('$', '');

let forecastHead = document.querySelector('.head h2 span');

forecastHead.textContent = (
  forecastData.ClosedForecast +
  forecastData.CreatedForecast +
  forecastData.ForecastForecast +
  forecastData.PulledForecast
).toLocaleString('en-US', {
  maximumFractionDigits: 2,
});

function handleCreated(event) {
  let val = +event.target.value;
  createdForecast.textContent =
    '$ ' +
    val.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  forecastData.CreatedForecast = val;
}
function handlePulled(event) {
  let val = +event.target.value;
  pulledForecast.textContent =
    '$ ' +
    val.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  forecastData.PulledForecast = val;
}

createdVal.addEventListener('change', handleCreated);
pulledVal.addEventListener('change', handlePulled);
