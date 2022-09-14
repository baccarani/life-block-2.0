// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Report {
    struct DeathReport {
        address recipient;
        string firstName;
        string lastName;
        string sin;
        string dateOfDeath;
        string city;
        string postalCode;
        string country;
        string province;
        string medicalCauseOfDeath;
        string meansOfDeath;
    }
    
    
    DeathReport[] public reports;
    address public manager;
    address[] public players;


    constructor () {
        manager = msg.sender;

    }


    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    } 


    function getReports() public view returns (DeathReport[] memory) {
        return reports;
    }


    function createReport(address recipient, string memory firstName, string memory lastName, string memory sin, string memory dateOfDeath, string memory city, string memory postalCode, string memory country, string memory province, string memory medicalCauseOfDeath, string memory meansOfDeath) public {
        DeathReport memory newReport = DeathReport ({
            recipient: recipient,
            firstName: firstName,
            lastName: lastName,
            sin: sin,
            dateOfDeath: dateOfDeath,
            city: city,
            postalCode: postalCode,
            country: country,
            province: province,
            medicalCauseOfDeath: medicalCauseOfDeath,
            meansOfDeath: meansOfDeath
        });

        reports.push(newReport);
    }

    function getReportsCount() public view returns (uint) {
        return reports.length;
    }
}   