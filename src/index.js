const Agerez = { 
    //>>>>>>>>>[ TYPING EFFECT ]<<<<<<<<<<<//
    /*>>>>>>>>>>  THIS FUNCTION TAKED 2 DAYS!! (only to create the first update) <<<<<<<<<<<<<<<<*/
    reTypingPage: function (arrayWithTextsLocations, timeBetweenTypingLetters, marker) {
        let reloaded;
        if (sessionStorage.reloaded != null && sessionStorage.reloaded != '') {
            if (JSON.parse(sessionStorage.reloaded) == true) {
                reloaded = false
                sessionStorage.reloaded = reloaded
            } else {
                reloaded = true
                sessionStorage.reloaded = reloaded
            }

        } else {
            reloaded = false
            sessionStorage.reloaded = reloaded
        }






        if (JSON.parse(sessionStorage.reloaded) === false) {
            // let innerHTMLCopy = [];
            // for(i=0;i<arrayWithTextsLocations.length;i++){
            //     let eleLocation = document.querySelector(arrayWithTextsLocations[i])
            //     innerHTMLCopy.push(eleLocation.innerHTML)
            // }


            let lastTime;
            let textsArray = []
            for (let i = 0; i < arrayWithTextsLocations.length; i++) {
                let eleLocation = document.querySelector(arrayWithTextsLocations[i])
                let ele = eleLocation.textContent
                textsArray.push(ele)
                eleLocation.textContent = ''
            }
            let m = 0;
            let itIsFirstLoop = true;
            for (let i = 0; i < textsArray.length; i++) {
                if (itIsFirstLoop) {
                    lastTime = 100
                    itIsFirstLoop = false
                } else {
                    lastTime += textsArray[i - 1].length * timeBetweenTypingLetters
                }
                let text = textsArray[i]
                let eleLocation = document.querySelector(arrayWithTextsLocations[i])
                setTimeout(() => {
                    if (marker == true) {
                        var style = document.createElement('style');
                        console.log(arrayWithTextsLocations[m])
                        style.innerHTML = `
                    ${arrayWithTextsLocations[m]} {
                    width:fit-content;
                    text-align:center;
                    border-right: 2px solid #333;
                    padding-right:2px;
                    animation: blinking 0.7s infinite;
                    }
                    @keyframes blinking {
                        from{
                            border-right: 2px solid #555;
                        }
                        to{
                            border-right: 2px solid transparent;
                        }
                    }
                    `;
                        document.head.appendChild(style);
                        m++
                    }
                    let l = 0;
                    let eleTime = setInterval(() => {
                        eleLocation.textContent += text[l]
                        l = l + 1
                        if (l === text.length) {
                            clearInterval(eleTime)
                        }
                    }, timeBetweenTypingLetters);
                }, lastTime);
            }
            // setTimeout(()=>{
            //     for(i=0;i<arrayWithTextsLocations.length;i++){
            //         let eleLocation = document.querySelector(arrayWithTextsLocations[i])
            //         eleLocation.innerHTML = innerHTMLCopy[i]
            //     }
            // }, lastTime)
            setTimeout(() => {
                window.location.reload()
            }, lastTime + (textsArray[textsArray.length - 1].length * timeBetweenTypingLetters))
        }
    },
    //>>>>>>>>>[ END OF TYPING EFFECT ]<<<<<<<<<<<//


    //////////////[ random array elements ]///////////////
    /*>>>>>>>>>> THIS FUNCTION TAKEN WHOLE DAY!! (only to create the first update) <<<<<<<<<<<<<<<<*/
    randomArrayElements: {
        everyReload: function (array) {
            let randomNumbers = [];
            let test = [];
            for (let i = 0; i < array.length; i++) {
                let randomNumber = Math.floor(Math.random() * array.length)
                for (i = 0; i < 2000000; i++) {
                    if (randomNumbers.includes(randomNumber)) {
                        randomNumber = Math.floor(Math.random() * array.length)
                    } else {
                        randomNumbers.push(randomNumber)
                        test.push(array[randomNumber])
                        break
                    }
                }
            }
            while (array.length !== test.length) {
                for (let i = 0; i < array.length; i++) {
                    let randomNumber = Math.floor(Math.random() * array.length)
                    for (i = 0; i < 2000000; i++) {
                        if (randomNumbers.includes(randomNumber)) {
                            randomNumber = Math.floor(Math.random() * array.length)
                        } else {
                            randomNumbers.push(randomNumber)
                            test.push(array[randomNumber])
                            break
                        }
                    }
                }
            }
            array.splice(0, array.length)
            for (let i = 0; i < test.length; i++) {
                array.push(test[i])
            }
            return array
        },

        everyOpen: function (array, arrayId) {
            if (sessionStorage.getItem(arrayId) !== '' && sessionStorage.getItem(arrayId) !== null && sessionStorage.getItem(arrayId) !== undefined && sessionStorage.getItem(arrayId) !== NaN) {

                array = JSON.parse(sessionStorage.getItem(arrayId))
                return array
            } else {
                sessionStorage.removeItem(arrayId)

                let randomNumbers = [];
                let test = [];
                for (let i = 0; i < array.length; i++) {
                    let randomNumber = Math.floor(Math.random() * array.length)
                    for (i = 0; i < 2000000; i++) {
                        if (randomNumbers.includes(randomNumber)) {
                            randomNumber = Math.floor(Math.random() * array.length)
                        } else {
                            randomNumbers.push(randomNumber)
                            test.push(array[randomNumber])
                            break
                        }
                    }
                }
                while (array.length !== test.length) {
                    for (let i = 0; i < array.length; i++) {
                        let randomNumber = Math.floor(Math.random() * array.length)
                        for (i = 0; i < 2000000; i++) {
                            if (randomNumbers.includes(randomNumber)) {
                                randomNumber = Math.floor(Math.random() * array.length)
                            } else {
                                randomNumbers.push(randomNumber)
                                test.push(array[randomNumber])
                                break
                            }
                        }
                    }
                }
                array.splice(0, array.length)
                for (let i = 0; i < test.length; i++) {
                    array.push(test[i])
                }

                sessionStorage.setItem(arrayId, JSON.stringify(array))

                array = JSON.parse(sessionStorage.getItem(arrayId))
                return array
            }
        },

        oneTime: function (array, arrayId) {
            if (localStorage.getItem(arrayId) !== '' && localStorage.getItem(arrayId) !== null && localStorage.getItem(arrayId) !== undefined && localStorage.getItem(arrayId) !== NaN) {

                array = JSON.parse(localStorage.getItem(arrayId))
                return array
            } else {
                localStorage.removeItem(arrayId)

                let randomNumbers = [];
                let test = [];
                for (let i = 0; i < array.length; i++) {
                    let randomNumber = Math.floor(Math.random() * array.length)
                    for (i = 0; i < 2000000; i++) {
                        if (randomNumbers.includes(randomNumber)) {
                            randomNumber = Math.floor(Math.random() * array.length)
                        } else {
                            randomNumbers.push(randomNumber)
                            test.push(array[randomNumber])
                            break
                        }
                    }
                }
                while (array.length !== test.length) {
                    for (let i = 0; i < array.length; i++) {
                        let randomNumber = Math.floor(Math.random() * array.length)
                        for (i = 0; i < 2000000; i++) {
                            if (randomNumbers.includes(randomNumber)) {
                                randomNumber = Math.floor(Math.random() * array.length)
                            } else {
                                randomNumbers.push(randomNumber)
                                test.push(array[randomNumber])
                                break
                            }
                        }
                    }
                }
                array.splice(0, array.length)
                for (let i = 0; i < test.length; i++) {
                    array.push(test[i])
                }
                localStorage.setItem(arrayId, JSON.stringify(array))

                array = JSON.parse(localStorage.getItem(arrayId))
                return array
            }
        },
    },

    //////////////[ end of random arrayelements ]///////////////


    //////////////[ Typing things ]///////////////
    typing: function (nameLocation, duration) {
        let locName = document.querySelector(nameLocation)
        let myName = locName.textContent
        locName.textContent = ''
        let i = 0;
        let myNameTime = setInterval(() => {
            locName.textContent += myName[i]
            i = i + 1
            if (i === myName.length) {
                clearInterval(myNameTime)
            }
        }, duration);
    },
    //////////////[ END Typing things ]///////////////



    //////////////[ avoid paste in inputs ]///////////////
    avoidPaste: function (inputId, message1, message2) {
        let pasted;
        const input = document.getElementById(inputId)
        if (sessionStorage.pasted != null && sessionStorage.pasted != '') {
            pasted = sessionStorage.pasted
        } else {
            pasted = false
        }
        input.onpaste = () => {
            sessionStorage.pasted = pasted
            if (!pasted) {
                input.value = message1
                pasted = true
                return false
            } else {
                input.value = message2
                return false
            }
        }
    },
    //////////////[ end of avoid paste in inputs]///////////////


    greeting: function (name) {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay;
        if (4 <= hours < 12) {
            timeOfDay = "morning"
        } else if (12 <= hours < 17) {
            timeOfDay = "afternoon"
        } else if (17 <= hours < 20) {
            timeOfDay = "evening"
        } else {
            timeOfDay = "night"
        }
        return `Good ${timeOfDay} , ${name[0].toUpperCase() + name.slice(1, name.length)}!`
    },


    capitalize: function (name) {
        return name[0].toUpperCase() + name.slice(1, name.length)
    },


    makeRandomColor: function () {
        let material = "1234567890ABCDEF"
        let colorParts = [];
        for (let i = 0; i < 6; i++) {
            colorParts.push(material[Math.floor(Math.random() * material.length)])
        }
        let finalColor = `#${colorParts.join('')}`
        return (finalColor)
    },


    errorMessage: function (message, idOfelementBeforeErrorMessage, fontSize) {
        let errorMessage = document.createElement('p')
        errorMessage.style = `color:red;letter-spacing:1.5px;font-size:${fontSize}`
        errorMessage.textContent = message
        document.getElementsByTagName(idOfelementBeforeErrorMessage).after(errorMessage)
    },


    tillNewYearCounter: function (secondsId, minutesId, hoursId, daysId, newYear) {
        let endDate = new Date(`Dec 31, ${newYear - 1} 23:59:59`).getTime()

        let seconds = document.getElementById(secondsId)
        let minutes = document.getElementById(minutesId)
        let hours = document.getElementById(hoursId)
        let days = document.getElementById(daysId)

        let counter = setInterval(() => {
            let dateNow = new Date().getTime()
            let deltaDate = endDate - dateNow

            let daysTime = Math.floor(deltaDate / (1000 * 60 * 60 * 24))
            let hoursTime = Math.floor((deltaDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutesTime = Math.floor((deltaDate % (1000 * 60 * 60)) / (1000 * 60))
            let secondsTime = Math.floor(deltaDate % (1000 * 60) / 1000)

            days.textContent = daysTime
            hours.textContent = hoursTime
            minutes.textContent = minutesTime
            seconds.textContent = secondsTime

        }, 1000);
    },


    countTimeSpentAtSite: function (secondsId, startSeconds, minutesId, startMinutes, hoursId, startHours, daysId, startdays, yearsId, startYears) {
        let seconds = document.getElementById(secondsId)
        let minutes = document.getElementById(minutesId)
        let hours = document.getElementById(hoursId)
        let days = document.getElementById(daysId)
        let years = document.getElementById(yearsId)

        let timeWithSeconds = startSeconds;
        let timeWithMinutes = startMinutes;
        let timeWithHours = startHours;
        let timeWithDays = startdays;
        let timeWithYears = startYears;

        if (localStorage.seconds != null && localStorage.seconds != '' && localStorage.seconds != NaN) {
            timeWithSeconds = localStorage.seconds
        } else {
            timeWithSeconds = startSeconds;
        }

        if (localStorage.minutes != null && localStorage.minutes != '' && localStorage.minutes != NaN) {
            timeWithMinutes = localStorage.minutes
        } else {
            timeWithMinutes = startMinutes;
        }

        if (localStorage.hours != null && localStorage.hours != '' && localStorage.hours != NaN) {
            timeWithHours = localStorage.hours
        } else {
            timeWithHours = startHours;
        }

        if (localStorage.days != null && localStorage.days != '' && localStorage.days != NaN) {
            timeWithDays = localStorage.days
        } else {
            timeWithDays = startdays;
        }

        if (localStorage.years != null && localStorage.years != '' && localStorage.years != NaN) {
            timeWithYears = localStorage.years
        } else {
            timeWithYears = startYears;
        }
        setInterval(() => {
            timeWithSeconds++
            if (timeWithSeconds == 60) {
                timeWithSeconds = 0
                timeWithMinutes++
            }
            if (timeWithMinutes == 60) {
                timeWithMinutes = 0
                timeWithHours++
            }
            if (timeWithHours == 24) {
                timeWithHours = 0
                timeWithDays++
            }
            if (timeWithDays == 365) {
                timeWithDays = 0
                timeWithYears++
                timeWithHours += 6
            }
            seconds.textContent = timeWithSeconds;
            localStorage.seconds = timeWithSeconds;
            minutes.textContent = timeWithMinutes;
            localStorage.minutes = timeWithMinutes;
            hours.textContent = timeWithHours;
            localStorage.hours = timeWithHours;
            days.textContent = timeWithDays;
            localStorage.days = timeWithDays;
            years.textContent = timeWithYears;
            localStorage.years = timeWithYears;

        }, 1000);
    },


    addActiveClass: function (buttonsArray) {
        buttonsArray.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                buttonsArray.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.currentTarget.classList.add('active')
            })
        })
    },


    generatePassword: function (lettersCount) {
        let passwordfinal = '';
        let lettersarray = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
        let passnum = lettersCount
        for (let i = 0; i < +passnum; i++) {
            passwordfinal += lettersarray[Math.floor(Math.random() * lettersarray.length)]
        }
        return (passwordfinal)
    },


    /*  in this function 
    you have to put the input in a div and set the div width = the input width you want. 
    and set the input width = (100%) of the div's width */
    addInputLettersCounter: function (maxlengthOfLetters, barColor, barBackgroundColor, haveNumbersCounter, locationOfNumbersCounter) {
        /*  in this function 
        you have to put the input in a div and set the div width = the input width you want. 
        and set the input width = (100%) of the div's width */

        const progress = document.createElement('span')
        let input = document.querySelector('#user-name')


        //   ADD ATTRIBUTES
        let zeroStyle = document.createAttribute('style')
        zeroStyle.value = 'color: red;font-weight: bold;'

        let progressStyle = document.createAttribute('style')
        progressStyle.value = `background-color: ${barColor};height: 2px;width: 0;position: relative;top: -2px;display: block;transition: 0.5s;`
        input.after(progress)
        progress.setAttributeNode(progressStyle)

        let inputStyle = document.createAttribute('style')
        inputStyle.value = `border-bottom: 2px solid ${barBackgroundColor};outline:none;`
        input.setAttributeNode(inputStyle)

        let maxlength = document.createAttribute('maxlength')
        maxlength.value = maxlengthOfLetters
        input.setAttributeNode(maxlength)

        let count;
        if (haveNumbersCounter) {
            count = document.querySelector(locationOfNumbersCounter)
            count.textContent = +maxlength.value - input.value.length
        }
        //  END OF ADDING ATTRIBUTES

        input.addEventListener('keyup',
            () => {
                progress.style.width = `${(100 / maxlength.value) * input.value.length}%`
                count.textContent = maxlength.value - input.value.length
                if (count.textContent === 0) {
                    count.setAttributeNode(zeroStyle)
                } else {
                    count.removeAttributeNode(zeroStyle)
                }
            })
    },

    abbText: function (text,maxLength,showThatWasRest){
        let STWR = true
        if(+maxLength === 0){
          console.error(`Agere : "maxLength" must be at least 1 `)
        }else if(!(+maxLength/2)){
          console.error(`Agere : "maxLength" must be number not ${typeof(maxLength)}`)
        }
        else if(text?.length<=Math.round(maxLength)){
          return (text)
        }else{
            if(typeof(showThatWasRest) === "boolean"){
                STWR = showThatWasRest
            }
          return(
            text?.slice(0,Math.round(maxLength)) + (STWR ? "...":"")
          )
        }
      },
      
    pull: function (array,value){
        const index = array.indexOf(value);
            if (index > -1) {
                array.splice(index, 1);
            }
          return(
            array
          )
      },

    // ityped: function(textLocation,textsArray,timeBetweenTypingEachLetter,showCursor){
    //     const text = document.querySelector(textLocation)
    //     let i = 0;
    //     let time;
    //     let itIsFirstLoop = true;
    //     setInterval(()=>{
    //         if(itIsFirstLoop){
    //             time = 100;
    //             itIsFirstLoop=false
    //         }else{
    //             time += (timeBetweenTypingEachLetter * textsArray[i-1].length)
    //         }
    //         let k=0
    //         setInterval(()=>{
    //             text.textContent += textsArray[i][k]
    //             k++
    //         },timeBetweenTypingEachLetter)
    //         console.log(time)
    //         console.log(textsArray[i])
    //         i++
    //     },time)
    // }
}


import randArr from "./lib/randArr"

const Agere = {
    randArr,
}

export default Agere;
