import React from 'react'

function TodoHeader() {
    return (
        <div className="row border-top border-bottom">
            <div className="col-2 pt-2 pb-2 pl-0 pr-5 text-capitalize text-wrap text-break">
                <span className="font-weight-bolder">Actions</span>
                <br />
                <span className="text-inst">
                    Move, indent, outdent, delete
                </span>
            </div>
            <div className="row col-10 pt-2 pb-2 text-wrap text-break">
                <div className="col-1"></div>
                <div className="col-10">
                    <span className="font-weight-bolder text-capitaize">Standard</span>
                    <br />
                    <span className="text-inst">
                        The text of the standard.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TodoHeader
