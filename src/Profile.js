import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Profile extends Component {
    render(){
        const age = calcAge();
        return(
            <Col className="yellow mt-4 p-4">
                <h1>Profile</h1>
                <div className="yellow-border mt-4 px-3 pt-3 pb-1">
                    <p>Name : Akihiro Otomo</p>
                    <p>{"Age : "+age}</p>
                    <p>University : Kyoto University</p>
                    <p>OS : Windows 10, Xubuntu 18.04</p>
                    <p>TextEditor : VSCode</p>
                </div>
            </Col>
        );
    }
}

function calcAge() {
    const myBirthday = {
        year: 1996,
        month: 1,
        date: 26
    };

    // 誕生日と今日の日付を引き算して算出
    const birthDate = new Date(myBirthday.year, myBirthday.month - 1, myBirthday.date);
    const today = new Date();
    const day1 = today.getFullYear().toString().padStart(4, '0') + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
    const day2 = birthDate.getFullYear().toString().padStart(4, '0') + (birthDate.getMonth() + 1).toString().padStart(2, '0') + birthDate.getDate().toString().padStart(2, '0');
    const age = Math.floor((Number(day1) - Number(day2)) / 10000);

    return age;
}