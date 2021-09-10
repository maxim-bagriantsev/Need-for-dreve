import React from "react";

export const RadioButton = () => {
    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    <label htmlFor="radio-1">
                        <input id="radio-1" type="radio" name="radio" value="1" className="real-radio-btn" checked/>
                        <span className="custom-radio-btn"/>
                        Любой
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="radio-2">
                        <input id="radio-2" type="radio" name="radio" value="1" className="real-radio-btn" checked/>
                        <span className="custom-radio-btn"/>
                        Красный
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="radio-3">
                        <input id="radio-3" type="radio" name="radio" value="1" className="real-radio-btn" checked/>
                        <span className="custom-radio-btn"/>
                        Голубой
                    </label>
                </div>
            </div>
        </>
    )
}
