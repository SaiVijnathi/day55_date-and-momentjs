import moment from 'moment';

function DateClasses() {
    let monthsArr=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let daysArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let independenceDay = new Date(1947,7,15,0,20,20,200);

    let currentDay = new Date();


  return (
    <div>
        <h1>learning date methods & momentJS</h1>
        <div>
        <form>
            <div>
                <label style={{ marginRight: "20px" }}>Batch start date</label>
                <input type="datetime-local" onChange={(e)=>{
                    let selectedDate = new Date(e.target.value);
                    console.log(selectedDate.getFullYear());
                    console.log(monthsArr[selectedDate.getMonth()]);
                    console.log(selectedDate.getDate());
                    console.log(daysArr[selectedDate.getDay()]);
                    console.log(selectedDate.getHours());
                    console.log(selectedDate.getMinutes());    
                    console.log(selectedDate.getSeconds());
                    console.log(selectedDate.getMilliseconds());
                    console.log(selectedDate.getTime());

                    let courseDurationinMS = 120*24*60*60*1000;
                    let courseEndDateinMS = selectedDate.getTime()+courseDurationinMS;
                    let courseEndDate = new Date(courseEndDateinMS);
                    console.log(courseEndDate);
                }}></input>

                <div className='methodsDiv'>

                <button type='button' name="getmethods" onClick={()=>{
                    //get methods
                    console.log(`Year - `+independenceDay.getFullYear());
                    console.log(`Month - `+monthsArr[independenceDay.getMonth()]);
                    console.log(`Date - `+independenceDay.getDate());
                    console.log(`Day - `+daysArr[independenceDay.getDay()]);
                    console.log(`hours - `+independenceDay.getHours());
                    console.log(`Minutes - `+independenceDay.getMinutes());    
                    console.log(`Seconds - `+independenceDay.getSeconds());
                    console.log(`Milliseconds - `+independenceDay.getMilliseconds());
                    console.log(`Time - `+independenceDay.getTime());
                }}>Date get methods</button>    

                {/* set methods */}
                
                <button type='button' onClick={()=>{
                    console.log(currentDay.setFullYear(2028,11,27));
                    console.log(currentDay.getFullYear());
                }}>setFullYear</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setMonth(8));
                    console.log(currentDay.getMonth());
                }}>setMonth</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setDate(56));
                    console.log(currentDay.getDate());
                }}>setDate</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setHours(21));
                    console.log(currentDay.getHours());                
                }}>setHours</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setMinutes(57));
                    console.log(currentDay.getMinutes());    
                }}>setMinutes</button>

                <button type='button' onClick={()=>{
                     console.log(currentDay.setSeconds(4567));
                     console.log(currentDay.getSeconds());
                }}>setSeconds</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setMilliseconds(34098725));
                    console.log(currentDay.getMilliseconds());
                }}>setMilliseconds</button>

                <button type='button' onClick={()=>{
                    console.log(currentDay.setTime(123456));
                    console.log(currentDay.getTime());
                }}>setTime</button>

                {/* momentJS */}

                <button type="button" onClick={()=>{
                    let result = moment().format('MMMM Do YYYY, h:mm:ss a');
                    console.log(result)
                    let result1 = moment("20111031", "YYYYMMDD").fromNow(); // 13 years ago
                    console.log(result1)
                    let result2 = moment().add(120, 'days').calendar();       // Tomorrow at 9:50 PM
                    console.log(result2)
                }}>momentJS</button>
                </div>
            </div>
        </form>
        </div>     
    </div>
  )
}

export default DateClasses;