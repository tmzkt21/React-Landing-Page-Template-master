import React, { Component } from 'react';
import Input from './Input';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {}, errors: {}
    };

    /* button 태그의 disabled 속성에 유효성 검증 결과를 반환하는 함수 */
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;

        return errors;
    }

    /* Username 및 Password 값이 변경되었을 때 유효성을 검증하는 함수 */
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    }

    /* Login 버튼 클릭 이벤트 처리기 */
    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} }); // 논리 OR 연산자: errors가 true이면 errors를, 그렇지 않다면 빈 배열을 반환

        if (errors) return;

        this.doSubmit(); // Login 버튼 클릭 시 doSubmit() 함수 호출(아래쪽에 구현함)
    }

    /* Username 및 Password 값 변경 이벤트 처리기 */
    handleChange = ({ currentTarget: input }) => {
        // 유효성 검증
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        // Username 및 Password를 State에 저장
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    /* button 태그 반환 함수 */
    renderButton(label) {
        return (
            <button
                disabled={this.validate()}
                className="btn btn-primary">{label}
            </button>
        )
    }

    /* input 태그 및 관련 정보 반환 함수 */
    renderInput(name, label, type = 'text') { // type 매개변수의 기본값을 'text'로 지정
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                value={data[name]} // data.username
                label={label}
                type={type}
                onChange={this.handleChange}
                error={errors[name]} // errors.username
            />
        )
    }

    /* 이 컴포넌트는 아무것도 렌더링하지 않으므로 render() 함수가 필요하지 않음. 렌더링은 LoginForm 컴포넌트에서 담당 */

    //전송버튼을 눌렀을때
    doSubmit (e) {
        window.alert('전송 : ' + this.state.value)
        e.preventDefault() }

    //화면 렌더링
    render () {
    // 이벤트를 메서드에 바인딩
    // ES2015의 새로운 기능인 arrow function
    // arrow function은 this를 자동으로 bind
    // react에서의 this는 가장 최상위인 window를 연결하기때문에 바인딩이 필요


        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit={doSubmit}>

                <input type='text'
                       value={this.state.data}
                       onChange={doChange} /> <input type='submit' data='전송' />
            </form>
        )

    }

}

export default Form;