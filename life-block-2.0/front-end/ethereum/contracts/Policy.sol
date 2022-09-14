// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Policy {

    struct Beneficiary {
        address recipient;
        string firstName;
        string lastName;
        uint8 allocation;
    }

    struct LifeInsurancePolicy {
        address owner;
        string firstName;
        string lastName;
        string sin;
        string dateOfBirth;
        string streetAddress;
        string city;
        string province;
        string country;
        string postalCode;
        string emailAddress;
        uint256 initialPremiumPayment;
        Beneficiary[] beneficiaries;
    }

    LifeInsurancePolicy[] public policies;
    address public manager;
    
    constructor() {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value >= .01 ether);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    } 

    function getPolicies() public view returns (LifeInsurancePolicy[] memory) {
        return policies;
    }

    function createPolicy(string[] memory stringArgs, uint8[] memory numberArgs, address[] memory addressArgs) public {
        // initialize new policy
        policies.push();
        LifeInsurancePolicy storage newPolicy = policies[policies.length - 1];

        // create a new beneficiary object for each allocation, then update the beneficiaries array
        for (uint i = 0; i < numberArgs.length; i++) {
            Beneficiary memory beneficiary = Beneficiary({
                recipient: addressArgs[i],
                firstName: stringArgs[10 + 2 * i],
                lastName: stringArgs[11 + 2 * i],
                allocation: numberArgs[i + 1]
            });

            newPolicy.beneficiaries.push(beneficiary);
        }
        
        // populate life insurance policy object
        newPolicy.owner = msg.sender;
        newPolicy.firstName = stringArgs[4];
        newPolicy.lastName = stringArgs[5];
        newPolicy.sin = stringArgs[8];
        newPolicy.dateOfBirth = stringArgs[2];
        newPolicy.streetAddress = stringArgs[9];
        newPolicy.city = stringArgs[0];
        newPolicy.postalCode = stringArgs[6];
        newPolicy.country = stringArgs[1];
        newPolicy.province = stringArgs[7];
        newPolicy.emailAddress = stringArgs[3];
        newPolicy.initialPremiumPayment = numberArgs[0];
    }

    function getPolicyCount() public view returns (uint) {
        return policies.length;
    }

    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function getPolicyByAttribute(string memory firstName, string memory lastName, string memory sin) public view returns (LifeInsurancePolicy memory) {
        for (uint i; i < policies.length; i++) {
            LifeInsurancePolicy memory p = policies[i];
            if (compareStrings(p.firstName, firstName) && compareStrings(p.lastName, lastName) && compareStrings(p.sin, sin)) {
                return policies[i];
            }
        }

        // need to fix the case of no matching policy
        return policies[0];
    }


    function withdrawAll(address payable _to) public {
        _to.transfer(address(this).balance);
    }


}   