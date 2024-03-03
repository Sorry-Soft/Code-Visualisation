var raw = `
{
	"operator_1": {
	  "top": 1,
	  "left": 1,
	  "properties": {
		"title": "myFunction",
		"inputs": {},
		"outputs": {},
		"inputData": {
		  "Keyword": "input"
		},
		"outputData": {
		  "Keyword": "output"
		}
	  }
	},
	"operator_2": {
	  "top": 1,
	  "left": 1,
	  "properties": {
		"title": "myOtherFunction",
		"inputs": {},
		"outputs": {},
		"inputData": {
		  "Keyword": "input"
		},
		"outputData": {
		  "Keyword": "output"
		}
	  }
	}
  }
`;




var operators1 = JSON.parse(raw);


var jsonData = {
			operators: operators1,
			links: {
			},
			flows: {
				flow_1: {
					fromOperator: 'operator1',
					fromConnector: 'flow_output_1',
					toOperator: 'operator2',
					toConnector: 'flow_input_1',
				},
			}
		}

		console.log(jsonData);