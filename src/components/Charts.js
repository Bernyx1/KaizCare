import React, {Component} from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2'

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:{
                labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label               : 'InPatients',
                    backgroundColor     : ['rgba(60,141,188,0.9)', 'rgba(255,99,132,0.6)','rgba(54,206,188,0.6)'],
                    borderColor         : 'rgba(60,141,188,0.8)',
                    pointRadius          : false,
                    pointColor          : '#3b8bba',
                    pointStrokeColor    : 'rgba(60,141,188,1)',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data                : [28, 48, 40, 19, 86, 27, 90]
                  },
                  {
                    label               : 'OutPatients',
                    backgroundColor     : ['rgba(210, 214, 222, 1)','rgba(255,99,132,0.6)','rgba(54,206,188,0.6)'],
                    borderColor         : 'rgba(210, 214, 222, 1)',
                    pointRadius         : false,
                    pointColor          : 'rgba(210, 214, 222, 1)',
                    pointStrokeColor    : '#c1c7d1',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data                : [65, 59, 80, 81, 56, 55, 40]
                  },
                ]
            }
        }
    }
    render(){
        return(
            <div className='chart' className='container'>
               <div className='row'>
                    <div className='col-md-6'>
                    <Line
                    data ={this.state.chartData}
                   options={{
                     title:{
                         display:true,
                         text:'Patients Visits',
                         fontSize:25
                     },
                     legend:{
                         display:true,
                         position:'top'
                     }
                    }} 
                />
                    </div>
                    <div className='col-md-6' >
                    <Pie
                    data ={this.state.chartData}
                   options={{
                     title:{
                         display:true,
                         text:'Appointments Booked',
                         fontSize:25
                     },
                     legend:{
                         display:true,
                         position:'top'
                     }
                    }} 
                />
                    </div>
               </div>

               <Bar
                    data ={this.state.chartData}
                   options={{
                     title:{
                         display:true,
                         text:'Doctors Availability',
                         fontSize:25
                     },
                     legend:{
                         display:true,
                         position:'top'
                     }
                    }} 
                />
            </div>
        )
    }
}

export default Chart;