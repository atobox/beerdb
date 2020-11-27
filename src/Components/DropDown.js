function DropDown(props)    {
    return (
        <div>            
            <div className="drpCard" type="button" data-toggle="collapse" data-target={"#" + props.id}>
                {props.prefaceContent}
            </div>            
            <div className="collapse" id={props.id}>
                <div className="card card-body">
                    {props.children}                                  
                </div>
            </div>
        </div>
    );
}

export default DropDown;