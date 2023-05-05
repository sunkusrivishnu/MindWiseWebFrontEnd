import "./tdetails.css";

export default function Tdetails() {

    const tdetails = JSON.parse(localStorage.getItem("currpattask"));
    const description = tdetails.description;
    const defaultflag = tdetails.defaultflag;
    const ttype = tdetails.type;
    const tans = tdetails.ans;

    return (

        <div className='Tdetailsmaincontainer'>

            <div className='Taskdetails'>

                <div className='TdetName'>
                    <span className='Tdetname'>
                        Name : 
                    </span>
                    <span className='Tdetnam'>
                        {tdetails.name}
                    </span>
                </div>

                <div className='Tdetdefault'>
                    <span className='tdescription'>
                        Description : 
                    </span>
                    <span className='tdescrip'>
                        {description}
                    </span>
                </div>

                <div className='TdetType'>
                    <span className='TdetailsType'>
                        Type : 
                    </span>
                    <span className='Tdettype'>
                        {ttype}
                    </span>
                </div>

                <div className='TdetAns'>
                    <span className='TdetailsAns'>
                        Solution : 
                    </span>
                    <span className='Tdetans'>
                        {tans}
                    </span>
                </div>

            </div>

        </div>

    );

}