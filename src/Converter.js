import React, {Component} from 'react';
import './converter.css';

class Converter extends Component {
    constructor( props ) {
    super( props );
    this.inputChange = props.inputChange;
    this.selectChange1 = props.selectChange1;
    this.selectChange2 = props.selectChange2;
    this.getRate = props.getRate;
  }


	render(){ 
		return (
			<div className='tc center shadow-5 w-30 pa3' id= 'todo'>
				<h1 className='f3'> 
					<select className='f4' onChange = {this.selectChange1}>
						<option value="null">Select currency</option>
						<option value="COP">COP</option>
				        <option value="CZK">CZK</option>
				        <option value="EUR">EUR</option>
			        </select> 	
			        into 
			        <select className='f4' onChange = {this.selectChange2}>
						<option value="null">Select currency</option>
						<option value="COP">COP</option>
				        <option value="CZK">CZK</option>
				        <option value="EUR">EUR</option>
			        </select> 
            	</h1>
				<input 
					placeholder='0.00'
					onChange = {this.inputChange}
				/>
				<button onClick = {this.getRate} > 
					Calculate
				</button> 
			</div>
		);	
		
	}
}
		

export default Converter;