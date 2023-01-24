import web3 from './web3';

const address = '0x1f15b7500a730d151c8d6b0a090f376d6f51bdfb';

const abi = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "stringArgs",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "numberArgs",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "addressArgs",
				"type": "address[]"
			}
		],
		"name": "createPolicy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "compareStrings",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPolicies",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sin",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "streetAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "province",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "postalCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emailAddress",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "initialPremiumPayment",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "recipient",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "firstName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "lastName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "allocation",
								"type": "uint256"
							}
						],
						"internalType": "struct Policy.Beneficiary[]",
						"name": "beneficiaries",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Policy.LifeInsurancePolicy[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sin",
				"type": "string"
			}
		],
		"name": "getPolicyByAttribute",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sin",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "streetAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "province",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "country",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "postalCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emailAddress",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "initialPremiumPayment",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "recipient",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "firstName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "lastName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "allocation",
								"type": "uint256"
							}
						],
						"internalType": "struct Policy.Beneficiary[]",
						"name": "beneficiaries",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Policy.LifeInsurancePolicy",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPolicyCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "policies",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfBirth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "streetAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "province",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "postalCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "emailAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialPremiumPayment",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);

