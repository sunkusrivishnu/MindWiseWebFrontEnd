import './tlist.css';

export default function Tlist() {
    return (

        <div className='Tlistmaincontainer'>

            <div className='listoftasks'>

                <button className='task1'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T1
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

                <button className='task2'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T2
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

                <button className='task3'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T3
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

                <button className='task4'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T4
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

                <button className='task5'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T5
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

                <button className='task6'>
                    <span className="icon">
                        <i className="fas fa-tasks"></i>
                    </span>
                    T6
                    <div className='CheckBox'>
                        <input type="checkbox" />
                    </div>
                </button>

            </div>
        
        </div>
    );
}