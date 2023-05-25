import React, { useState } from 'react'

export default function About() {

    const [style, changeStyle] = useState({
            color: 'black',
            backgroundColor: 'white'
        });
        const [btnText, changeBtnText] = useState("Enable Dark mode");
        const elements = document.querySelectorAll('.nabbu');
    const backgroundChange = () => {
        if(style.color === 'black'){
            changeStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            })
            changeBtnText('Enable Light Mode');
           
            elements && elements.length && elements.forEach((element)=>{
                element.style.color = 'white'
            })
        }
        else{
            changeStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            changeBtnText('Enable Dark Mode');
            elements.forEach((element)=>{
                element.style.color = 'black'
            })
        }

    }
    return (
        <div className='container' style={style}>
            <h3 className='pt-2'>About Us</h3>
            <div id="accordion">
                <div className="card" style={style}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn  nabbu collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={style}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn  nabbu collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={style}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn  nabbu collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3....
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3 '>
                <button type='button' onClick={backgroundChange} className='btn btn-primary mb-3'>{btnText}</button>
            </div>
        </div>
    )
}
