$(document).ready(function(){
			const canvas = document.getElementById("canvas");
			const canHgt = 720;
			const canWid = 930;
			canvas.style.height = canHgt+'px';
			canvas.style.width = canWid+'px';
			canvas.height = canHgt*2;
			canvas.width = canWid*2;
			const ctx = canvas.getContext("2d");
			ctx.scale(2,2);
			ctx.lineWidth = 1;
			ctx.strokeColor = '#000'
		   
			const colorArray = ['#FF0000','#FF9933','#7c4cc2','#4cc292','#4c92c2','#464646','#C9224C','#92C24C','#C24C92','#99FF33','#9933FF','#FF6633','#3366FF','#33FF66'];
			const dateLabels = [
			['Dec',31],['Jan',1],['Jan',2],['Jan',3],['Jan',4],['Jan',5],['Jan',6],['Jan',7],['Jan',8],['Jan',9],['Jan',10],['Jan',11],['Jan',12],['Jan',13],['Jan',14],['Jan',15],['Jan',16],['Jan',17],['Jan',18],['Jan',19],['Jan',20],['Jan',21],['Jan',22],['Jan',23],['Jan',24],['Jan',25],['Jan',26],['Jan',27],['Jan',28],['Jan',29],['Jan',30],['Jan',31],['Feb',1],['Feb',2],['Feb',3],['Feb',4],['Feb',5],['Feb',6],['Feb',7],['Feb',8],['Feb',9],['Feb',10],['Feb',11],['Feb',12],['Feb',13],['Feb',14],['Feb',15],['Feb',16],['Feb',17],['Feb',18],['Feb',19],['Feb',20],['Feb',21],['Feb',22],['Feb',23],['Feb',24],['Feb',25],['Feb',26],['Feb',27],['Feb',28],['Feb',29],['Mar',1],['Mar',2],['Mar',3],['Mar',4],['Mar',5],['Mar',6],['Mar',7],['Mar',8],['Mar',9],['Mar',10],['Mar',11],['Mar',12],['Mar',13],['Mar',14],['Mar',15],['Mar',16],['Mar',17],['Mar',18],['Mar',19],['Mar',20],['Mar',21],['Mar',22],['Mar',23],['Mar',24],['Mar',25],['Mar',26],['Mar',27],['Mar',28],['Mar',29],['Mar',30],['Mar',31],['Apr',1],['Apr',2],['Apr',3],['Apr',4],['Apr',5],['Apr',6],['Apr',7],['Apr',8],['Apr',9],['Apr',10],['Apr',11],['Apr',12],['Apr',13],['Apr',14],['Apr',15],['Apr',16],['Apr',17],['Apr',18],['Apr',19],['Apr',20],['Apr',21],['Apr',22],['Apr',23],['Apr',24],['Apr',25],['Apr',26],['Apr',27],['Apr',28]
			];
			
			const doubleData = {
				'US':[13.03],
				'Russia':[2.8],
				'Spain':[7.3],
				'UK':[5],
				'Italy':[5.7],
				'France':[9.3],
				'Brazil':[8],
				'Germany':[10.7],
				'Turkey':[2],
				'Iran':[13.8],
				'China':[3.8],
				'India':[10.3],
				'Canada':[8.4],
				'Peru':[8.98],
			}
			const heightFactorCountry = canHgt/14;
			let secs = 1000;
			let offsetCounter = {
				'US':0,
				'Russia':0,
				'Spain':0,
				'UK':0,
				'Italy':0,
				'France':0,
				'Brazil':0,
				'Germany':0,
				'Turkey':0,
				'Iran':0,
				'China':0,
				'India':0,
				'Canada':0,
				'Peru':0,
			};
			const circWid = (canWid-200)/50;
			function plotData(row,index,color,subLevel,secs,partial){
				
				setTimeout(()=>{
					let num;
					if(partial == undefined){
						num =1;
					}else if(partial>0){
						num = partial
					}
					
					
					ctx.beginPath();
					ctx.fillStyle =color;
					ctx.moveTo(200+(index*circWid),(row*heightFactorCountry)+25+(subLevel*17))
					ctx.arc(
						200+(index*circWid),
						(row*heightFactorCountry)+25+(subLevel*17),
						8,0,2*Math.PI*num
					);
					ctx.fill();
					ctx.strokeStyle = '#33333377';
					ctx.stroke();
					ctx.closePath();
				
					
				},secs*200)
			}

			function plotDaysText(row,index,color,label,country){
				if(label){
					setTimeout(()=>{
						ctx.beginPath();
						ctx.fillStyle ='#333';
						ctx.font = '600 20px monty';
						ctx.textAlign = 'right';
						if (country == 'India') {
							ctx.fillStyle ='#FF6633';
						}
						const t1 = ctx.measureText(country).width;
						ctx.font = '400 24px monty';
						ctx.fillText('('+label+'%)',170-t1,(row*heightFactorCountry)+40)
						ctx.fill();
						ctx.closePath();
					},index*50)
				}
			}


			function makeGraph(counter){
				if(counter<1){
					$('.legendContainer').addClass('active')
					if(dateLabels[counter][1]>9){
						$('.date').text(dateLabels[counter][1])
					}else{
						$('.date').text('0'+dateLabels[counter][1])
					}
					$('.month').text(dateLabels[counter][0])
					// $('.stateName').addClass('active');
					let countryCount = 0;
					
					for (country in doubleData) {
						if (doubleData.hasOwnProperty(country)) {
							if(counter == 0){
								ctx.beginPath();
								ctx.fillStyle ='#333';
								if (country == 'India') {
									ctx.fillStyle ='#FF6633';
								}
								ctx.font = '600 20px monty';
								ctx.textAlign = 'right';
								ctx.fillText(country, 180, (countryCount*heightFactorCountry)+15+(heightFactorCountry/2))
								ctx.fill();
								ctx.closePath();
								for (let indexer = 0; indexer < 50; indexer++) {
									ctx.beginPath();
									ctx.fillStyle ='#B5B5B677';
									ctx.moveTo(200+(indexer*circWid),(countryCount*heightFactorCountry)+30+(0*11))
									ctx.arc(
										200+(indexer*circWid),
										(countryCount*heightFactorCountry)+25+(0*17),
										5,0,2*Math.PI
									);
									// ctx.arc(
									// 	200+(indexer*circWid),
									// 	(countryCount*heightFactorCountry)+25+(0*11),
									// 	5,0,2*Math.PI
									// );
									ctx.fill();
									ctx.closePath();

									ctx.beginPath();
									ctx.fillStyle ='#B5B5B677';
									ctx.arc(
										200+(indexer*circWid),
										(countryCount*heightFactorCountry)+25+(1*17),
										5,0,2*Math.PI
									);
									ctx.fill();
									ctx.closePath();
								}
							}
							for (var i = 0; i < parseInt(doubleData[country][counter]); i++) {
								if(country == 'India'){
									console.log('ind'+i)
								}
								if(i%2==0){
									plotData(countryCount,offsetCounter[country],colorArray[countryCount],0,countryCount*3+offsetCounter[country])
								}else{
									plotData(countryCount,offsetCounter[country],colorArray[countryCount],1,countryCount*3+offsetCounter[country])
									offsetCounter[country] += 1;
								}
							}
							console.log(country, parseInt(doubleData[country][counter])%2, )
							if(parseInt(doubleData[country][counter])%2 == 0){
								plotData(countryCount,offsetCounter[country],colorArray[countryCount],0,countryCount*3+offsetCounter[country],doubleData[country][counter]%1)
							}else{
								plotData(countryCount,offsetCounter[country],colorArray[countryCount],1,countryCount*3+offsetCounter[country],doubleData[country][counter]%1)
							}
							// console.log(country,doubleData[country][counter])
							plotDaysText(countryCount,offsetCounter[country],colorArray[countryCount],doubleData[country][counter],country)
						}
						countryCount += 1;
					}
					
					setTimeout(()=>{
						makeGraph(counter+1)
					},secs*2)
					
				}
			}
			setTimeout(function () {
				makeGraph(0);
			}, 2000)
			
		})