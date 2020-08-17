import React from 'react';

// ...rest: name, label, error 외의 props(value, type, onChange)를 포함
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest} // Form 컴포넌트에서 전달한 'value={value} type={type} onChange={onChange}' 코드를 대신함
                name={name}
                id={name}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>} {/* 논리 AND 연산자: error가 true이면 후자를, 그렇지 않다면 전자를 반환 */}
        </div>
    );
}

export default Input;