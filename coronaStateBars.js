$(document).ready(function(){
	const dataIndex = [
		{
			date:"30-01-2020","states":{'Kerala':[1,0,0,0]}
		},{
			date:"31-01-2020","states":{'Kerala':[1,0,0,0]}
		},{
			date:"01-02-2020","states":{'Kerala':[2,0,0,0]}
		},{
			date:"02-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"03-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"04-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"05-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"06-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"07-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"08-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"09-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"10-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"11-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"12-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"13-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"14-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"15-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"16-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"17-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"18-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"19-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"20-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"21-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"22-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"23-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"24-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"25-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"26-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"27-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"28-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"29-02-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"01-03-2020","states":{'Kerala':[3,0,0,0]}
		},{
			date:"02-03-2020","states":{'Telengana':[1,0,0,0],'Kerala':[3,0,0,0],'Delhi':[1,0,0,0]}
		},{
			date:"03-03-2020","states":{'Telengana':[1,0,0,0],'Rajasthan':[0,1,0,0],'Kerala':[3,0,3,0],'Delhi':[1,0,0,0]}
		},{
			date:"04-03-2020","states":{'Uttar Pradesh':[6,0,0,0],'Kerala':[3,0,3,0],'Haryana':[0,2,0,0],'Delhi':[1,0,0,0],'Telengana':[1,0,0,0],'Rajasthan':[1,14,0,0]}
		},{
			date:"05-03-2020","states":{'Delhi':[2,0,0,0],'Haryana':[0,2,0,0],'Kerala':[3,0,3,0],'Rajasthan':[1,14,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[7,0,0,0]}
		},{
			date:"06-03-2020","states":{'Delhi':[3,0,0,0],'Haryana':[0,2,0,0],'Kerala':[3,0,3,0],'Rajasthan':[1,14,0,0],'Uttar Pradesh':[7,0,0,0],'Telengana':[1,0,0,0]}
		},{
			date:"07-03-2020","states":{'Kerala':[3,0,3,0],'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0],'Telengana':[1,0,0,0],'Tamil Nadu':[1,0,0,0],'Delhi':[3,0,0,0],'Haryana':[0,2,0,0],'Rajasthan':[1,14,0,0]}
		},{
			date:"08-03-2020","states":{'Ladakh':[2,0,0,0],'Telengana':[1,0,0,0],'Tamil Nadu':[1,0,0,0],'Rajasthan':[1,14,0,0],'Kerala':[8,0,3,0],'Haryana':[0,2,0,0],'Delhi':[3,0,0,0],'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0]}
		},{
			date:"09-03-2020","states":{'Karnataka':[1,0,0,0],'Kerala':[9,0,3,0],'Maharashtra':[2,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[1,14,0,0],'Tamil Nadu':[1,0,0,0],'Telengana':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Uttar Pradesh':[7,0,0,0],'Haryana':[0,2,0,0],'Delhi':[4,0,0,0]}
		},{
			date:"10-03-2020","states":{'Uttar Pradesh':[7,0,0,0],'Ladakh':[2,0,0,0],'Delhi':[4,0,0,0],'Haryana':[0,2,0,0],'Karnataka':[4,0,0,0],'Kerala':[15,0,3,0],'Maharashtra':[5,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[1,14,0,0],'Tamil Nadu':[1,0,0,0],'Telengana':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0]}
		},{
			date:"11-03-2020","states":{'Maharashtra':[2,0,0,0],'Delhi':[5,0,0,0],'Haryana':[0,14,0,0],'Kerala':[17,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[9,0,0,0],'Ladakh':[2,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[4,0,0,0]}
		},{
			date:"12-03-2020","states":{'Delhi':[6,0,0,0],'Haryana':[0,14,0,0],'Kerala':[17,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[10,1,0,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[4,0,0,0],'Maharashtra':[11,0,0,0],'Andhra Pradesh':[1,0,0,0]}
		},{
			date:"13-03-2020","states":{'Delhi':[6,0,0,0],'Haryana':[0,14,0,0],'Kerala':[19,0,3,0],'Rajasthan':[1,2,0,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[10,1,0,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[1,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[6,0,0,1],'Maharashtra':[14,0,0,0],'Andhra Pradesh':[1,0,0,0]}
		},{
			date:"14-03-2020","states":{'Delhi':[7,0,1,1],'Haryana':[0,14,0,0],'Kerala':[19,0,3,0],'Rajasthan':[1,2,1,0],'Telengana':[1,0,0,0],'Uttar Pradesh':[11,1,5,0],'Ladakh':[3,0,0,0],'Tamil Nadu':[1,0,0,0],'Jammu and Kashmir':[2,0,0,0],'Punjab':[1,0,0,0],'Karnataka':[6,0,0,1],'Maharashtra':[14,0,0,0],'Andhra Pradesh':[1,0,0,0]}
		},{
			date:"15-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[7,0,2,1],'Haryana':[0,14,0,0],'Karnataka':[6,0,0,1],'Kerala':[22,0,3,0],'Maharashtra':[32,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,0,1,0],'Jammu and Kashmir':[2,0,0,0],'Ladakh':[3,0,0,0],'Uttar Pradesh':[12,1,4,0],'Uttarakhand':[1,0,0,0]}
		},{
			date:"16-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[7,0,2,1],'Haryana':[0,14,0,0],'Karnataka':[6,0,0,1],'Kerala':[23,0,3,0],'Maharashtra':[32,0,0,0],'Odisha':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,0,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[4,0,0,0],'Uttar Pradesh':[12,1,4,0],'Uttarakhand':[1,0,0,0]}
		},{
			date:"17-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[8,0,2,1],'Haryana':[1,14,0,0],'Karnataka':[11,0,0,1],'Kerala':[24,2,3,0],'Maharashtra':[36,3,0,1],'Odisha':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[3,2,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[6,0,0,0],'Uttar Pradesh':[14,1,5,0],'Uttarakhand':[1,0,0,0]}
		},{
			date:"18-03-2020","states":{'Andhra Pradesh':[1,0,0,0],'Delhi':[9,1,2,1],'Haryana':[3,14,0,0],'Karnataka':[11,0,0,1],'Kerala':[25,2,3,0],'Maharashtra':[39,3,0,1],'Odisha':[1,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[1,0,0,0],'Rajasthan':[2,2,3,0],'Tamil Nadu':[1,0,0,0],'Telengana':[4,2,1,0],'Jammu and Kashmir':[3,0,0,0],'Ladakh':[8,0,0,0],'Uttar Pradesh':[15,1,5,0],'Uttarakhand':[1,0,0,0],'West Bengal':[1,0,0,0]}
		},{
			date:"19-03-2020","states":{'Andhra Pradesh':[2,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[11,1,3,1],'Haryana':[3,14,0,0],'Karnataka':[14,0,0,1],'Kerala':[25,2,3,0],'Maharashtra':[44,3,0,1],'Odisha':[1,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[2,0,0,1],'Rajasthan':[5,2,3,0],'Tamil Nadu':[2,0,1,0],'Telengana':[4,2,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[8,0,0,0],'Uttar Pradesh':[18,1,9,0],'Uttarakhand':[1,0,0,0],'West Bengal':[1,0,0,0]}
		},{
			date:"20-03-2020","states":{'Andhra Pradesh':[3,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[16,1,5,1],'Gujarat':[5,0,0,0],'Haryana':[3,14,0,0],'Karnataka':[15,0,1,1],'Kerala':[26,2,3,0],'Maharashtra':[49,3,0,1],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[2,0,0,1],'Rajasthan':[15,2,3,0],'Tamil Nadu':[3,0,1,0],'Telengana':[8,9,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[10,0,0,0],'Uttar Pradesh':[22,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[2,0,0,0]}
		},{
			date:"21-03-2020","states":{'Andhra Pradesh':[3,0,0,0],'Chhattisgarh':[1,0,0,0],'Delhi':[25,1,5,1],'Gujarat':[7,0,0,0],'Haryana':[3,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[15,0,1,1],'Kerala':[33,7,3,0],'Madhya Pradesh':[4,0,0,0],'Maharashtra':[60,3,0,1],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[13,0,0,1],'Rajasthan':[15,2,3,0],'Tamil Nadu':[3,0,1,0],'Telengana':[10,11,1,0],'Chandigarh':[1,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[23,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[3,0,0,0]}
		},{
			date:"22-03-2020","states":{'Andhra Pradesh':[5,0,0,0],'Bihar':[2,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[28,1,5,1],'Gujarat':[18,0,0,1],'Haryana':[7,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[26,0,2,1],'Kerala':[45,7,3,0],'Madhya Pradesh':[4,0,0,0],'Maharashtra':[64,3,0,2],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[21,0,0,1],'Rajasthan':[22,2,3,0],'Tamil Nadu':[5,2,1,0],'Telengana':[11,11,1,0],'Chandigarh':[5,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[26,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[4,0,0,0]}
		},{
			date:"23-03-2020","states":{'Andhra Pradesh':[7,0,0,0],'Bihar':[2,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[28,1,5,1],'Gujarat':[29,0,0,1],'Haryana':[12,14,0,0],'Himachal Pradesh':[2,0,0,0],'Karnataka':[33,0,2,1],'Kerala':[60,7,3,0],'Madhya Pradesh':[6,0,0,0],'Maharashtra':[71,3,0,2],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[21,0,0,1],'Rajasthan':[26,2,3,0],'Tamil Nadu':[7,2,1,0],'Telengana':[22,10,1,0],'Chandigarh':[6,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[30,1,9,0],'Uttarakhand':[3,0,0,0],'West Bengal':[7,0,0,0]}
		},{
			date:"24-03-2020","states":{'Andhra Pradesh':[8,0,0,0],'Bihar':[3,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[29,1,6,1],'Gujarat':[32,1,0,1],'Haryana':[14,14,11,0],'Himachal Pradesh':[3,0,0,1],'Karnataka':[37,0,3,1],'Kerala':[87,8,4,0],'Madhya Pradesh':[7,0,0,0],'Maharashtra':[86,3,0,2],'Manipur':[1,0,0,0],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[29,0,0,1],'Rajasthan':[30,2,3,0],'Tamil Nadu':[13,2,1,0],'Telengana':[25,10,1,0],'Chandigarh':[7,0,0,0],'Jammu and Kashmir':[4,0,0,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[32,1,11,0],'Uttarakhand':[3,1,0,0],'West Bengal':[9,0,0,1]}
		},{
			date:"25-03-2020","states":{
				'Andhra Pradesh':[9,0,1,0],'Bihar':[4,0,0,1],'Chhattisgarh':[1,0,0,0],'Delhi':[30,1,6,1],'Gujarat':[37,1,0,1],'Haryana':[14,14,11,0],'Himachal Pradesh':[3,0,0,1],'Karnataka':[41,0,3,1],'Kerala':[101,8,4,0],'Madhya Pradesh':[14,0,0,0],'Maharashtra':[125,3,1,3],'Manipur':[1,0,0,0],'Mizoram':[1,0,0,0],'Odisha':[2,0,0,0],'Puducherry':[1,0,0,0],'Punjab':[29,0,0,1],'Rajasthan':[34,2,3,0],'Tamil Nadu':[16,2,1,0],'Telengana':[25,10,1,0],'Chandigarh':[7,0,0,0],'Jammu and Kashmir':[7,0,1,0],'Ladakh':[13,0,0,0],'Uttar Pradesh':[36,1,11,0],'Uttarakhand':[3,1,0,0],'West Bengal':[9,0,0,1],
			}
		},{
			date:"26-03-2020","states":{
				"Andaman and Nicobar Islands":[0,1,0,0],
				"Andhra Pradesh":[0,11,1,0],
				"Bihar":[0,6,0,1],
				"Chandigarh":[0,7,0,0],
				"Chhattisgarh":[0,6,0,0],
				"Delhi":[0,36,6,1],
				"Goa":[0,3,0,0],
				"Gujarat":[0,43,0,3],
				"Haryana":[0,30,11,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,13,1,0],
				"Karnataka":[0,55,3,2],
				"Kerala":[0,118,6,0],
				"Ladakh":[0,13,0,0],
				"Madhya Pradesh":[0,20,0,1],
				"Maharashtra":[0,124,1,3],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,2,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,33,0,1],
				"Rajasthan":[0,41,3,0],
				"Tamil Nadu":[0,26,1,1],
				"Telengana":[0,44,1,0],
				"Uttarakhand":[0,5,0,0],
				"Uttar Pradesh":[0,41,11,0],
				"West Bengal":[0,10,0,1],
			}
		},{
			date:"27-03-2020","states":{
				"Andaman and Nicobar Islands":[0,1,0,0],
				"Andhra Pradesh":[0,12,1,0],
				"Bihar":[0,6,0,1],
				"Chandigarh":[0,7,0,0],
				"Chhattisgarh":[0,6,0,0],
				"Delhi":[0,36,6,1],
				"Goa":[0,3,0,0],
				"Gujarat":[0,43,0,3],
				"Haryana":[0,30,11,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,13,1,1],
				"Karnataka":[0,55,3,2],
				"Kerala":[0,137,11,0],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,20,0,1],
				"Maharashtra":[0,130,15,4],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,2,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,33,0,1],
				"Rajasthan":[0,41,3,0],
				"Tamil Nadu":[0,29,1,1],
				"Telengana":[0,45,1,0],
				"Uttarakhand":[0,5,0,0],
				"Uttar Pradesh":[0,41,11,0],
				"West Bengal":[0,10,0,1],

			}
		},{
			date:"28-03-2020","states":{
				"Andhra Pradesh":[0,14,1,0],
				"Andaman and Nicobar Islands":[0,6,0,0],
				"Bihar":[0,9,0,1],
				"Chandigarh":[0,8,0,0],
				"Chhattisgarh":[0,6,0,0],
				"Delhi":[0,39,6,1],
				"Goa":[0,3,0,0],
				"Gujarat":[0,45,0,3],
				"Haryana":[0,33,12,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,20,1,1],
				"Karnataka":[0,55,3,2],
				"Kerala":[0,176,11,0],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,30,0,2],
				"Maharashtra":[0,180,25,5],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,3,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,38,1,1],
				"Rajasthan":[0,54,3,0],
				"Tamil Nadu":[0,40,2,1],
				"Telengana":[0,56,1,0],
				"Uttarakhand":[0,5,0,0],
				"Uttar Pradesh":[0,55,11,0],
				"West Bengal":[0,15,0,1],

			}
		},{
			date:"29-03-2020","states":{
				"Andhra Pradesh":[0,19,1,0],
				"Andaman and Nicobar Islands":[0,9,0,0],
				"Bihar":[0,11,0,1],
				"Chandigarh":[0,8,0,0],
				"Chhattisgarh":[0,7,0,0],
				"Delhi":[0,49,6,2],
				"Goa":[0,5,0,0],
				"Gujarat":[0,58,1,5],
				"Haryana":[0,33,17,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,31,1,2],
				"Karnataka":[0,76,5,3],
				"Kerala":[0,182,15,1],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,30,0,2],
				"Maharashtra":[0,186,25,6],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,3,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,38,1,1],
				"Rajasthan":[0,55,3,0],
				"Tamil Nadu":[0,49,4,1],
				"Telengana":[0,66,1,1],
				"Uttarakhand":[0,7,2,0],
				"Uttar Pradesh":[0,65,11,0],
				"West Bengal":[0,18,0,1],

			}
		},{
			date:"30-03-2020","states":{
				"Andhra Pradesh":[0,23,1,0],
				"Andaman and Nicobar Islands":[0,9,0,0],
				"Bihar":[0,15,0,1],
				"Chandigarh":[0,8,0,0],
				"Chhattisgarh":[0,7,0,0],
				"Delhi":[0,87,6,2],
				"Goa":[0,5,0,0],
				"Gujarat":[0,69,1,6],
				"Haryana":[0,36,18,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,48,2,2],
				"Karnataka":[0,83,5,3],
				"Kerala":[0,202,19,1],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,47,0,3],
				"Maharashtra":[0,198,25,8],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,3,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,38,1,1],
				"Rajasthan":[0,59,3,0],
				"Tamil Nadu":[0,67,4,1],
				"Telengana":[0,71,1,1],
				"Uttarakhand":[0,7,2,0],
				"Uttar Pradesh":[0,82,11,0],
				"West Bengal":[0,22,0,1],

			}
		},{
			date:"31-03-2020","states":{
				"Andhra Pradesh":[0,40,1,0],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Bihar":[0,15,0,1],
				"Chandigarh":[0,13,0,0],
				"Chhattisgarh":[0,8,0,0],
				"Delhi":[0,97,6,2],
				"Goa":[0,5,0,0],
				"Gujarat":[0,73,3,6],
				"Haryana":[0,40,21,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,54,2,2],
				"Karnataka":[0,83,5,3],
				"Kerala":[0,234,19,1],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,47,0,3],
				"Maharashtra":[0,216,39,9],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,3,0,0],
				"Puducherry":[0,1,0,0],
				"Punjab":[0,41,1,3],
				"Rajasthan":[0,74,3,0],
				"Tamil Nadu":[0,74,4,1],
				"Telengana":[0,79,1,1],
				"Uttarakhand":[0,7,2,0],
				"Uttar Pradesh":[0,101,14,0],
				"West Bengal":[0,26,0,2],

			}
		},{
			date:"01-04-2020","states":{
				"Andhra Pradesh":[0,83,1,0],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Assam":[0,1,0,0],
				"Bihar":[0,23,0,1],
				"Chandigarh":[0,16,0,0],
				"Chhattisgarh":[0,9,2,0],
				"Delhi":[0,152,6,2],
				"Goa":[0,5,0,0],
				"Gujarat":[0,82,5,6],
				"Haryana":[0,43,21,0],
				"Himachal Pradesh":[0,3,0,1],
				"Jammu and Kashmir":[0,62,2,2],
				"Jharkhand":[0,1,0,0],
				"Karnataka":[0,101,8,3],
				"Kerala":[0,241,23,2],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,66,0,3],
				"Maharashtra":[0,302,39,9],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,4,0,0],
				"Puducherry":[0,3,1,0],
				"Punjab":[0,42,1,3],
				"Rajasthan":[0,93,3,0],
				"Tamil Nadu":[0,234,6,1],
				"Telengana":[0,96,1,3],
				"Uttarakhand":[0,7,2,0],
				"Uttar Pradesh":[0,103,14,2],
				"West Bengal":[0,37,6,3],

			}
		},{
			date:"02-04-2020","states":{
				"Andhra Pradesh":[0,86,1,1],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Assam":[0,5,0,0],
				"Bihar":[0,24,0,1],
				"Chandigarh":[0,16,0,0],
				"Chhattisgarh":[0,9,2,0],
				"Delhi":[0,219,8,4],
				"Goa":[0,5,0,0],
				"Gujarat":[0,87,8,7],
				"Haryana":[0,43,21,0],
				"Himachal Pradesh":[0,3,1,1],
				"Jammu and Kashmir":[0,62,2,2],
				"Jharkhand":[0,1,0,0],
				"Karnataka":[0,110,9,3],
				"Kerala":[0,265,25,2],
				"Ladakh":[0,13,3,0],
				"Madhya Pradesh":[0,99,0,6],
				"Maharashtra":[0,335,42,13],
				"Manipur":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,4,0,0],
				"Puducherry":[0,3,1,0],
				"Punjab":[0,46,1,4],
				"Rajasthan":[0,108,3,0],
				"Tamil Nadu":[0,234,6,1],
				"Telengana":[0,107,1,3],
				"Uttarakhand":[0,7,2,0],
				"Uttar Pradesh":[0,113,14,2],
				"West Bengal":[0,53,6,3],

			}
		},{
			date:"03-04-2020","states":{
				"Andhra Pradesh":[0,132,1,1],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,16,0,0],
				"Bihar":[0,29,0,1],
				"Chandigarh":[0,18,0,0],
				"Chhattisgarh":[0,9,3,0],
				"Delhi":[0,219,8,4],
				"Goa":[0,6,0,0],
				"Gujarat":[0,95,10,8],
				"Haryana":[0,49,24,0],
				"Himachal Pradesh":[0,6,1,1],
				"Jammu and Kashmir":[0,75,3,2],
				"Jharkhand":[0,2,0,0],
				"Karnataka":[0,124,10,3],
				"Kerala":[0,286,27,2],
				"Ladakh":[0,14,3,0],
				"Madhya Pradesh":[0,104,0,6],
				"Maharashtra":[0,335,42,16],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,5,0,0],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,48,1,5],
				"Rajasthan":[0,167,3,0],
				"Tamil Nadu":[0,309,6,1],
				"Telengana":[0,158,1,7],
				"Uttarakhand":[0,10,2,0],
				"Uttar Pradesh":[0,172,14,2],
				"West Bengal":[0,63,3,3],
			}
		},{
			date:"04-04-2020","states":{
				"Andhra Pradesh":[0,161,1,1],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,24,0,0],
				"Bihar":[0,30,0,1],
				"Chandigarh":[0,18,0,0],
				"Chhattisgarh":[0,9,3,0],
				"Delhi":[0,445,15,6],
				"Goa":[0,7,0,0],
				"Gujarat":[0,105,14,10],
				"Haryana":[0,49,24,0],
				"Himachal Pradesh":[0,6,1,1],
				"Jammu and Kashmir":[0,75,3,2],
				"Jharkhand":[0,2,0,0],
				"Karnataka":[0,128,12,3],
				"Kerala":[0,295,41,2],
				"Ladakh":[0,14,3,0],
				"Madhya Pradesh":[0,104,0,6],
				"Maharashtra":[0,490,42,24],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,5,0,0],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,57,1,5],
				"Rajasthan":[0,200,21,0],
				"Tamil Nadu":[0,411,6,2],
				"Telengana":[0,159,1,7],
				"Uttarakhand":[0,16,2,0],
				"Uttar Pradesh":[0,174,19,2],
				"West Bengal":[0,69,3,3],
			}
		},{
			date:"05-04-2020","states":{
				"Andhra Pradesh":[0,190,1,1],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,26,0,0],
				"Bihar":[0,30,0,1],
				"Chandigarh":[0,18,0,0],
				"Chhattisgarh":[0,9,3,0],
				"Delhi":[0,503,18,7],
				"Goa":[0,7,0,0],
				"Gujarat":[0,122,18,11],
				"Haryana":[0,59,25,1],
				"Himachal Pradesh":[0,6,1,1],
				"Jammu and Kashmir":[0,106,4,2],
				"Jharkhand":[0,3,0,0],
				"Karnataka":[0,144,12,4],
				"Kerala":[0,306,49,2],
				"Ladakh":[0,14,10,0],
				"Madhya Pradesh":[0,165,0,9],
				"Maharashtra":[0,490,42,24],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,20,0,0],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,57,1,5],
				"Rajasthan":[0,200,21,0],
				"Tamil Nadu":[0,485,6,3],
				"Telengana":[0,269,32,7],
				"Uttarakhand":[0,22,2,0],
				"Uttar Pradesh":[0,227,19,2],
				"West Bengal":[0,80,10,3],
			}
		},{
			date:"06-04-2020","states":{
				"Andhra Pradesh":[0,226,1,3],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,26,0,0],
				"Bihar":[0,32,0,1],
				"Chandigarh":[0,18,0,0],
				"Chhattisgarh":[0,10,8,0],
				"Delhi":[0,523,19,7],
				"Goa":[0,7,0,0],
				"Gujarat":[0,144,22,12],
				"Haryana":[0,84,25,1],
				"Himachal Pradesh":[0,13,2,1],
				"Jammu and Kashmir":[0,109,4,2],
				"Jharkhand":[0,4,0,0],
				"Karnataka":[0,151,12,4],
				"Kerala":[0,314,55,2],
				"Ladakh":[0,14,10,0],
				"Madhya Pradesh":[0,165,0,9],
				"Maharashtra":[0,748,56,45],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,21,2,0],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,76,4,6],
				"Rajasthan":[0,274,21,0],
				"Tamil Nadu":[0,571,8,5],
				"Telengana":[0,321,34,7],
				"Uttarakhand":[0,26,4,0],
				"Uttar Pradesh":[0,305,21,3],
				"West Bengal":[0,80,10,3],
			}
		},{
			date:"07-04-2020","states":{
				"Andhra Pradesh":[0,266,1,3],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,26,0,0],
				"Bihar":[0,32,0,1],
				"Chandigarh":[0,18,7,0],
				"Chhattisgarh":[0,10,9,0],
				"Delhi":[0,576,21,7],
				"Goa":[0,7,0,0],
				"Gujarat":[0,165,25,13],
				"Haryana":[0,90,25,1],
				"Himachal Pradesh":[0,13,2,1],
				"Jammu and Kashmir":[0,116,4,2],
				"Jharkhand":[0,4,0,0],
				"Karnataka":[0,175,25,4],
				"Kerala":[0,327,58,2],
				"Ladakh":[0,14,10,0],
				"Madhya Pradesh":[0,229,0,13],
				"Maharashtra":[0,868,56,48],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,42,2,1],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,91,4,7],
				"Rajasthan":[0,288,21,3],
				"Tamil Nadu":[0,621,8,5],
				"Telengana":[0,364,35,7],
				"Tripura":[0,1,0,0],
				"Uttarakhand":[0,31,5,0],
				"Uttar Pradesh":[0,305,21,3],
				"West Bengal":[0,91,13,3],

			}
		},{
			date:"08-04-2020","states":{
				"Andhra Pradesh":[0,305,5,4],
				"Andaman and Nicobar Islands":[0,10,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,27,0,0],
				"Bihar":[0,38,0,1],
				"Chandigarh":[0,18,7,0],
				"Chhattisgarh":[0,10,9,0],
				"Delhi":[0,576,21,9],
				"Goa":[0,7,0,0],
				"Gujarat":[0,165,25,13],
				"Haryana":[0,147,28,3],
				"Himachal Pradesh":[0,18,2,1],
				"Jammu and Kashmir":[0,116,4,2],
				"Jharkhand":[0,4,0,0],
				"Karnataka":[0,175,25,4],
				"Kerala":[0,336,70,2],
				"Ladakh":[0,14,10,0],
				"Madhya Pradesh":[0,229,0,13],
				"Maharashtra":[0,1018,79,64],
				"Manipur":[0,2,0,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,42,2,1],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,91,4,7],
				"Rajasthan":[0,328,21,3],
				"Tamil Nadu":[0,690,19,7],
				"Telengana":[0,427,35,7],
				"Tripura":[0,1,0,0],
				"Uttarakhand":[0,31,5,0],
				"Uttar Pradesh":[0,343,26,3],
				"West Bengal":[0,99,13,5],
			}
		},{
			date:"09-04-2020","states":{
				"Andhra Pradesh":[0,348,6,4],
				"Andaman and Nicobar Islands":[0,11,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,28,0,0],
				"Bihar":[0,39,0,1],
				"Chandigarh":[0,18,7,0],
				"Chhattisgarh":[0,10,9,0],
				"Delhi":[0,669,21,9],
				"Goa":[0,7,0,0],
				"Gujarat":[0,179,25,16],
				"Haryana":[0,169,29,3],
				"Himachal Pradesh":[0,18,2,1],
				"Jammu and Kashmir":[0,158,4,4],
				"Jharkhand":[0,13,0,0],
				"Karnataka":[0,181,28,5],
				"Kerala":[0,345,83,2],
				"Ladakh":[0,14,10,0],
				"Madhya Pradesh":[0,259,0,16],
				"Maharashtra":[0,1135,117,72],
				"Manipur":[0,2,1,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,42,2,1],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,101,4,8],
				"Rajasthan":[0,383,21,3],
				"Tamil Nadu":[0,738,21,8],
				"Telengana":[0,442,35,7],
				"Tripura":[0,1,0,0],
				"Uttarakhand":[0,35,5,0],
				"Uttar Pradesh":[0,410,31,4],
				"West Bengal":[0,103,16,5],
			}
		},{
			date:"10-04-2020","states":{
				"Andhra Pradesh":[0,348,6,4],
				"Andaman and Nicobar Islands":[0,11,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,29,0,0],
				"Bihar":[0,39,0,1],
				"Chandigarh":[0,18,7,0],
				"Chhattisgarh":[0,10,9,0],
				"Delhi":[0,720,25,12],
				"Goa":[0,7,0,0],
				"Gujarat":[0,241,26,17],
				"Haryana":[0,169,29,3],
				"Himachal Pradesh":[0,18,2,1],
				"Jammu and Kashmir":[0,158,4,4],
				"Jharkhand":[0,13,0,1],
				"Karnataka":[0,181,28,5],
				"Kerala":[0,357,96,2],
				"Ladakh":[0,15,10,0],
				"Madhya Pradesh":[0,259,0,16],
				"Maharashtra":[0,1364,125,97],
				"Manipur":[0,2,1,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,44,2,1],
				"Puducherry":[0,5,1,0],
				"Punjab":[0,101,4,8],
				"Rajasthan":[0,463,21,3],
				"Tamil Nadu":[0,834,21,8],
				"Telengana":[0,442,35,7],
				"Tripura":[0,1,0,0],
				"Uttarakhand":[0,35,5,0],
				"Uttar Pradesh":[0,410,31,4],
				"West Bengal":[0,116,16,5],
			}
		},{
			date:"11-04-2020","states":{
				"Andhra Pradesh":[0,381,11,6],
				"Andaman and Nicobar Islands":[0,11,0,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,29,0,1],
				"Bihar":[0,60,0,1],
				"Chandigarh":[0,18,7,0],
				"Chhattisgarh":[0,18,9,0],
				"Delhi":[0,903,25,14],
				"Goa":[0,7,1,0],
				"Gujarat":[0,308,31,19],
				"Haryana":[0,177,29,3],
				"Himachal Pradesh":[0,28,6,1],
				"Jammu and Kashmir":[0,207,6,4],
				"Jharkhand":[0,17,0,1],
				"Karnataka":[0,214,37,6],
				"Kerala":[0,364,123,2],
				"Ladakh":[0,15,10,0],
				"Madhya Pradesh":[0,443,0,33],
				"Maharashtra":[0,1574,188,110],
				"Manipur":[0,2,1,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,48,2,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,132,5,11],
				"Rajasthan":[0,553,21,3],
				"Tamil Nadu":[0,911,44,8],
				"Telengana":[0,504,43,9],
				"Tripura":[0,2,0,0],
				"Uttarakhand":[0,35,5,0],
				"Uttar Pradesh":[0,433,32,4],
				"West Bengal":[0,126,16,5],

			}
		},{
			date:"12-04-2020","states":{
				"Andhra Pradesh":[0,381,11,6],
				"Andaman and Nicobar Islands":[0,11,10,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,29,0,1],
				"Bihar":[0,64,19,1],
				"Chandigarh":[0,19,7,0],
				"Chhattisgarh":[0,25,10,0],
				"Delhi":[0,1069,25,19],
				"Goa":[0,7,5,0],
				"Gujarat":[0,432,44,22],
				"Haryana":[0,185,29,3],
				"Himachal Pradesh":[0,32,6,1],
				"Jammu and Kashmir":[0,224,6,4],
				"Jharkhand":[0,17,0,1],
				"Karnataka":[0,226,37,6],
				"Kerala":[0,374,142,2],
				"Ladakh":[0,15,10,0],
				"Madhya Pradesh":[0,564,0,36],
				"Maharashtra":[0,1761,208,127],
				"Manipur":[0,2,1,0],
				"Mizoram":[0,1,0,0],
				"Odisha":[0,54,12,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,151,5,11],
				"Rajasthan":[0,700,21,3],
				"Tamil Nadu":[0,969,44,10],
				"Telengana":[0,504,43,9],
				"Tripura":[0,2,0,0],
				"Uttarakhand":[0,35,5,0],
				"Uttar Pradesh":[0,452,45,5],
				"West Bengal":[0,134,19,5],

			}
		},{
			date:"13-04-2020","states":{
				"Andhra Pradesh":[0,432,11,7],
				"Andaman and Nicobar Islands":[0,11,10,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,31,0,1],
				"Bihar":[0,64,26,1],
				"Chandigarh":[0,21,7,0],
				"Chhattisgarh":[0,31,10,0],
				"Delhi":[0,1154,27,24],
				"Goa":[0,7,5,0],
				"Gujarat":[0,539,47,26],
				"Haryana":[0,185,29,3],
				"Himachal Pradesh":[0,32,13,1],
				"Jammu and Kashmir":[0,245,6,4],
				"Jharkhand":[0,19,0,2],
				"Karnataka":[0,247,59,6],
				"Kerala":[0,376,179,3],
				"Ladakh":[0,15,10,0],
				"Madhya Pradesh":[0,604,44,43],
				"Maharashtra":[0,1985,217,149],
				"Manipur":[0,2,1,0],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,1,0,0],
				"Odisha":[0,54,12,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,167,14,11],
				"Rajasthan":[0,812,21,3],
				"Tamil Nadu":[0,1075,50,11],
				"Telengana":[0,562,100,16],
				"Tripura":[0,2,0,0],
				"Uttarakhand":[0,35,5,0],
				"Uttar Pradesh":[0,483,47,5],
				"West Bengal":[0,152,29,7],

			}
		},{
			date:"14-04-2020","states":{
				"Andhra Pradesh":[0,473,14,9],
				"Andaman and Nicobar Islands":[0,11,10,0],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,31,0,1],
				"Bihar":[0,66,26,1],
				"Chandigarh":[0,21,7,0],
				"Chhattisgarh":[0,31,10,0],
				"Delhi":[0,1510,30,28],
				"Goa":[0,7,5,0],
				"Gujarat":[0,617,55,26],
				"Haryana":[0,199,34,3],
				"Himachal Pradesh":[0,32,13,1],
				"Jammu and Kashmir":[0,270,16,4],
				"Jharkhand":[0,24,0,2],
				"Karnataka":[0,258,65,9],
				"Kerala":[0,379,198,3],
				"Ladakh":[0,15,10,0],
				"Madhya Pradesh":[0,730,51,50],
				"Maharashtra":[0,2337,229,160],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,1,0,0],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,1,0,0],
				"Odisha":[0,55,18,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,176,14,12],
				"Rajasthan":[0,879,133,3],
				"Tamil Nadu":[0,1173,58,11],
				"Telengana":[0,624,100,17],
				"Tripura":[0,2,0,0],
				"Uttarakhand":[0,35,7,0],
				"Uttar Pradesh":[0,657,49,5],
				"West Bengal":[0,190,36,7],

			}
		},{
			date:"15-04-2020","states":{
				"Andaman and Nicobar Islands":[0,11,10,0],
				"Andhra Pradesh":[0,503,16,9],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,33,0,1],
				"Bihar":[0,70,29,1],
				"Chandigarh":[0,21,7,0],
				"Chhattisgarh":[0,33,13,0],
				"Delhi":[0,1561,30,30],
				"Goa":[0,7,5,0],
				"Gujarat":[0,695,59,30],
				"Haryana":[0,199,34,3],
				"Himachal Pradesh":[0,33,13,1],
				"Jammu and Kashmir":[0,278,30,4],
				"Jharkhand":[0,27,0,2],
				"Karnataka":[0,277,75,11],
				"Kerala":[0,387,211,3],
				"Ladakh":[0,17,10,0],
				"Madhya Pradesh":[0,987,64,53],
				"Maharashtra":[0,2687,259,178],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,7,0,1],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,0,0,0],
				"Odisha":[0,60,18,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,186,14,13],
				"Rajasthan":[0,1005,147,3],
				"Tamil Nadu":[0,1204,81,12],
				"Telengana":[0,647,120,18],
				"Tripura":[0,2,0,0],
				"Uttarakhand":[0,37,9,0],
				"Uttar Pradesh":[0,735,51,11],
				"West Bengal":[0,213,37,7],

			}
		},{
			date:"16-04-2020","states":{
				"Andaman and Nicobar Islands":[0,11,10,0],
				"Andhra Pradesh":[0,534,20,14],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,33,5,1],
				"Bihar":[0,74,29,1],
				"Chandigarh":[0,21,7,0],
				"Chhattisgarh":[0,33,17,0],
				"Delhi":[0,1578,42,32],
				"Goa":[0,7,5,0],
				"Gujarat":[0,871,64,36],
				"Haryana":[0,205,43,3],
				"Himachal Pradesh":[0,35,16,1],
				"Jammu and Kashmir":[0,300,36,4],
				"Jharkhand":[0,28,0,2],
				"Karnataka":[0,315,82,13],
				"Kerala":[0,388,218,3],
				"Ladakh":[0,17,10,0],
				"Madhya Pradesh":[0,1120,64,53],
				"Maharashtra":[0,2919,295,187],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,7,0,1],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,0,0,0],
				"Odisha":[0,60,18,1],
				"Puducherry":[0,7,1,0],
				"Punjab":[0,186,27,13],
				"Rajasthan":[0,1023,147,3],
				"Tamil Nadu":[0,1242,118,14],
				"Telengana":[0,698,120,18],
				"Tripura":[0,2,1,0],
				"Uttarakhand":[0,37,9,0],
				"Uttar Pradesh":[0,773,68,13],
				"West Bengal":[0,231,42,7],

			}
		},{
			date:"17-04-2020","states":{
			"Andaman and Nicobar Islands":[11,10,0],
			"Andhra Pradesh":[572,36,14],
			"Arunachal Pradesh":[1,0,0],
			"Assam":[35,5,1],
			"Bihar":[83,37,1],
			"Chandigarh":[21,9,0],
			"Chhattisgarh":[36,23,0],
			"Delhi":[1640,51,38],
			"Goa":[7,6,0],
			"Gujarat":[1021,74,38],
			"Haryana":[205,43,3],
			"Himachal Pradesh":[35,16,1],
			"Jammu and Kashmir":[314,38,4],
			"Jharkhand":[29,0,2],
			"Karnataka":[353,82,13],
			"Kerala":[395,245,3],
			"Ladakh":[18,14,0],
			"Madhya Pradesh":[1308,65,57],
			"Maharashtra":[3205,300,194],
			"Manipur":[2,1,0],
			"Meghalaya":[9,0,1],
			"Mizoram":[1,0,0],
			"Nagaland":[0,0,0],
			"Odisha":[60,19,1],
			"Puducherry":[7,1,0],
			"Punjab":[186,27,13],
			"Rajasthan":[1131,164,11],
			"Tamil Nadu":[1267,180,15],
			"Telengana":[743,186,18],
			"Tripura":[2,1,0],
			"Uttarakhand":[37,9,0],
			"Uttar Pradesh":[846,74,14],
			"West Bengal":[255,51,10],

			}
		},{
			date:"18-04-2020","states":{
				"Andaman and Nicobar Islands":[0,12,11,0],
				"Andhra Pradesh":[0,603,42,15],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,35,9,1],
				"Bihar":[0,85,37,2],
				"Chandigarh":[0,21,9,0],
				"Chhattisgarh":[0,36,24,0],
				"Delhi":[0,1707,72,42],
				"Goa":[0,7,6,0],
				"Gujarat":[0,1272,88,48],
				"Haryana":[0,225,43,3],
				"Himachal Pradesh":[0,38,16,1],
				"Jammu and Kashmir":[0,328,42,5],
				"Jharkhand":[0,33,0,2],
				"Karnataka":[0,371,92,13],
				"Kerala":[0,396,255,3],
				"Ladakh":[0,18,14,0],
				"Madhya Pradesh":[0,1355,69,69],
				"Maharashtra":[0,3323,331,201],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,11,0,1],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,0,0,0],
				"Odisha":[0,60,21,1],
				"Puducherry":[0,7,3,0],
				"Punjab":[0,202,27,13],
				"Rajasthan":[0,1229,183,11],
				"Tamil Nadu":[0,1323,283,15],
				"Telengana":[0,791,186,18],
				"Tripura":[0,2,1,0],
				"Uttarakhand":[0,42,9,0],
				"Uttar Pradesh":[0,969,86,14],
				"West Bengal":[0,287,55,10],

			}
		},{
			date:"19-04-2020","states":{
				"Andaman and Nicobar Islands":[0,14,11,0],
				"Andhra Pradesh":[0,603,42,15],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,35,12,1],
				"Bihar":[0,86,37,2],
				"Chandigarh":[0,23,10,0],
				"Chhattisgarh":[0,36,24,0],
				"Delhi":[0,1893,72,43],
				"Goa":[0,7,6,0],
				"Gujarat":[0,1604,94,58],
				"Haryana":[0,233,87,3],
				"Himachal Pradesh":[0,39,16,1],
				"Jammu and Kashmir":[0,341,51,5],
				"Jharkhand":[0,35,0,2],
				"Karnataka":[0,384,104,14],
				"Kerala":[0,400,257,3],
				"Ladakh":[0,18,14,0],
				"Madhya Pradesh":[0,1407,127,70],
				"Maharashtra":[0,3651,365,211],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,11,0,1],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,0,0,0],
				"Odisha":[0,61,24,1],
				"Puducherry":[0,7,3,0],
				"Punjab":[0,219,31,16],
				"Rajasthan":[0,1351,183,11],
				"Tamil Nadu":[0,1372,365,15],
				"Telengana":[0,844,186,18],
				"Tripura":[0,2,1,0],
				"Uttarakhand":[0,42,9,0],
				"Uttar Pradesh":[0,1084,108,17],
				"West Bengal":[0,310,62,12],

			}
		},{
			date:"20-04-2020","states":{
				"Andaman and Nicobar Islands":[0,14,11,0],
				"Andhra Pradesh":[0,603,42,15],
				"Arunachal Pradesh":[0,1,0,0],
				"Assam":[0,35,12,1],
				"Bihar":[0,86,37,2],
				"Chandigarh":[0,23,10,0],
				"Chhattisgarh":[0,36,24,0],
				"Delhi":[0,1893,72,43],
				"Goa":[0,7,6,0],
				"Gujarat":[0,1604,94,58],
				"Haryana":[0,233,87,3],
				"Himachal Pradesh":[0,39,16,1],
				"Jammu and Kashmir":[0,341,51,5],
				"Jharkhand":[0,35,0,2],
				"Karnataka":[0,384,104,14],
				"Kerala":[0,400,257,3],
				"Ladakh":[0,18,14,0],
				"Madhya Pradesh":[0,1407,127,70],
				"Maharashtra":[0,3651,365,211],
				"Manipur":[0,2,1,0],
				"Meghalaya":[0,11,0,1],
				"Mizoram":[0,1,0,0],
				"Nagaland":[0,0,0,0],
				"Odisha":[0,61,24,1],
				"Puducherry":[0,7,3,0],
				"Punjab":[0,219,31,16],
				"Rajasthan":[0,1351,183,11],
				"Tamil Nadu":[0,1372,365,15],
				"Telengana":[0,844,186,18],
				"Tripura":[0,2,1,0],
				"Uttarakhand":[0,42,9,0],
				"Uttar Pradesh":[0,1084,108,17],
				"West Bengal":[0,310,62,12],
			}
		}
	]
	const hi ={
		"Andhra Pradesh":[0,348,6,4],
		"Andaman and Nicobar Islands":[0,11,0,0],
		"Arunachal Pradesh":[0,1,0,0],
		"Assam":[0,29,0,0],
		"Bihar":[0,39,0,1],
		"Chandigarh":[0,18,7,0],
		"Chhattisgarh":[0,10,9,0],
		"Delhi":[0,720,25,12],
		"Goa":[0,7,0,0],
		"Gujarat":[0,241,26,17],
		"Haryana":[0,169,29,3],
		"Himachal Pradesh":[0,18,2,1],
		"Jammu and Kashmir":[0,158,4,4],
		"Jharkhand":[0,13,0,1],
		"Karnataka":[0,181,28,5],
		"Kerala":[0,357,96,2],
		"Ladakh":[0,15,10,0],
		"Madhya Pradesh":[0,259,0,16],
		"Maharashtra":[0,1364,125,97],
		"Manipur":[0,2,1,0],
		"Mizoram":[0,1,0,0],
		"Odisha":[0,44,2,1],
		"Puducherry":[0,5,1,0],
		"Punjab":[0,101,4,8],
		"Rajasthan":[0,463,21,3],
		"Tamil Nadu":[0,834,21,8],
		"Telengana":[0,442,35,7],
		"Tripura":[0,1,0,0],
		"Uttarakhand":[0,35,5,0],
		"Uttar Pradesh":[0,410,31,4],
		"West Bengal":[0,116,16,5],

	}
	
	let dataTotal = {
		"Andaman and Nicobar Islands":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,6,0,0],[0,9,0,0],[0,9,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,10,0,0],[0,11,0,0],[0,11,0,0],[0,11,0,0],[0,11,10,0],[0,11,10,0],[0,11,10,0],[0,11,10,0],[0,11,10,0],[0,11,10,0],[0,12,11,0],[0,14,11,0],[0,15,11,0,15],[0,16,11,0],[0,17,11,0],[0,18,11,0],[0,22,11,0],[0,27,11,0],[0,33,11,0],[0,33,11,0],[0,33,11,0],[0,33,15,0],[0,33,15,0],[0,33,16,0],[0,33,16,0],[0,33,17,0],[0,33,32,0],[0,33,32,0],[0,33,32,0],[0,33,32,0],[0,33,33,0],[0,33,33,0],[0,33,33,0],[0,33,33,0],[0,33,33,0],[0,33,33,0]],
		"Andhra Pradesh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,0],[3,0,0,0],[3,0,0,0],[5,0,0,0],[7,0,0,0],[8,0,0,0],[9,0,1,0],[0,11,1,0],[0,12,1,0],[0,14,1,0],[0,19,1,0],[0,23,1,0],[0,40,1,0],[0,83,1,0],[0,86,1,1],[0,132,1,1],[0,161,1,1],[0,190,1,1],[0,226,1,3],[0,266,1,3],[0,305,5,4],[0,348,6,4],[0,348,6,4],[0,381,11,6],[0,381,11,6],[0,432,11,7],[0,473,14,9],[0,503,16,9],[0,534,20,14],[0,572,36,14],[0,603,42,15],[0,603,42,15],[0,722,92,20,722],[0,757,96,22],[0,813,120,24],[0,895,141,27],[0,955,145,29],[0,1061,171,31],[0,1061,171,31],[0,1177,235,31],[0,1183,235,31],[0,1332,287,31],[0,1332,287,31],[0,1463,403,33],[0,1463,403,33],[0,1583,488,33],[0,1650,524,36],[0,1717,589,36],[0,1717,589,36],[0,1777,729,36],[0,1847,780,38],[0,1887,842,41],[0,1930,887,44],[0,1980,925,45],[0,2018,975,45],[0,2090,1056,46]],
		"Arunachal Pradesh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0,1],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]],
		"Assam":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,5,0,0],[0,16,0,0],[0,24,0,0],[0,26,0,0],[0,26,0,0],[0,26,0,0],[0,27,0,0],[0,28,0,0],[0,29,0,0],[0,29,0,1],[0,29,0,1],[0,31,0,1],[0,31,0,1],[0,33,0,1],[0,33,5,1],[0,35,5,1],[0,35,9,1],[0,35,12,1],[0,35,17,1,35],[0,35,19,1],[0,35,19,1],[0,35,19,1],[0,36,19,1],[0,36,19,1],[0,36,19,1],[0,36,27,1],[0,36,27,1],[0,38,27,1],[0,38,29,1],[0,42,29,1],[0,43,32,1],[0,43,32,1],[0,43,32,1],[0,43,32,1],[0,43,32,1],[0,45,32,1],[0,54,34,1],[0,59,34,1],[0,63,34,2],[0,63,34,2],[0,65,34,2],[0,65,39,2]],
		"Bihar":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,0,1],[2,0,0,1],[3,0,0,1],[4,0,0,1],[0,6,0,1],[0,6,0,1],[0,9,0,1],[0,11,0,1],[0,15,0,1],[0,15,0,1],[0,23,0,1],[0,24,0,1],[0,29,0,1],[0,30,0,1],[0,30,0,1],[0,32,0,1],[0,32,0,1],[0,38,0,1],[0,39,0,1],[0,39,0,1],[0,60,0,1],[0,64,19,1],[0,64,26,1],[0,66,26,1],[0,70,29,1],[0,74,29,1],[0,83,37,1],[0,85,37,2],[0,86,37,2],[0,96,42,2,96],[0,114,42,2],[0,126,46,2],[0,148,46,2],[0,176,46,2],[0,228,46,2],[0,243,46,2],[0,277,56,2],[0,345,57,2],[0,383,64,2],[0,392,65,2],[0,426,82,2],[0,471,98,3],[0,482,117,4],[0,517,125,4],[0,529,130,4],[0,536,142,4],[0,542,188,4],[0,550,246,5],[0,571,297,5],[0,591,322,5],[0,696,365,6],[0,747,377,6],[0,831,383,6]],
		"Chandigarh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[5,0,0,0],[6,0,0,0],[7,0,0,0],[7,0,0,0],[0,7,0,0],[0,7,0,0],[0,8,0,0],[0,8,0,0],[0,8,0,0],[0,13,0,0],[0,16,0,0],[0,16,0,0],[0,18,0,0],[0,18,0,0],[0,18,0,0],[0,18,0,0],[0,18,7,0],[0,18,7,0],[0,18,7,0],[0,18,7,0],[0,18,7,0],[0,19,7,0],[0,21,7,0],[0,21,7,0],[0,21,7,0],[0,21,7,0],[0,21,9,0],[0,21,9,0],[0,23,10,0],[0,26,13,0,26],[0,26,13,0],[0,27,14,0],[0,27,14,0],[0,27,14,0],[0,28,15,0],[0,28,15,0],[0,30,17,0],[0,40,17,0],[0,56,17,0],[0,56,17,0],[0,56,17,0],[0,88,17,0],[0,94,19,0],[0,94,19,0],[0,102,21,1],[0,111,21,1],[0,120,21,1],[0,135,21,1],[0,150,21,1],[0,169,24,2],[0,169,24,2],[0,174,24,2],[0,187,28,3]],
		"Chhattisgarh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[0,6,0,0],[0,6,0,0],[0,6,0,0],[0,7,0,0],[0,7,0,0],[0,8,0,0],[0,9,2,0],[0,9,2,0],[0,9,3,0],[0,9,3,0],[0,9,3,0],[0,10,8,0],[0,10,9,0],[0,10,9,0],[0,10,9,0],[0,10,9,0],[0,18,9,0],[0,25,10,0],[0,31,10,0],[0,31,10,0],[0,33,13,0],[0,33,17,0],[0,36,23,0],[0,36,24,0],[0,36,24,0],[0,36,25,0,36],[0,36,25,0],[0,36,26,0],[0,36,28,0],[0,36,28,0],[0,36,30,0],[0,37,32,0],[0,37,32,0],[0,37,32,0],[0,38,34,0],[0,38,34,0],[0,40,36,0],[0,43,36,0],[0,43,36,0],[0,57,36,0],[0,58,36,0],[0,59,36,0],[0,59,36,0],[0,59,38,0],[0,59,38,0],[0,59,43,0],[0,59,49,0],[0,59,53,0],[0,59,54,0]],
		"Dadar Nagar Haveli":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],
		"Delhi":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[4,0,0,0],[4,0,0,0],[5,0,0,0],[6,0,0,0],[6,0,0,0],[7,0,1,1],[7,0,2,1],[7,0,2,1],[8,0,2,1],[9,1,2,1],[11,1,3,1],[16,1,5,1],[25,1,5,1],[28,1,5,1],[28,1,5,1],[29,1,6,1],[30,1,6,1],[0,36,6,1],[0,36,6,1],[0,39,6,1],[0,49,6,2],[0,87,6,2],[0,97,6,2],[0,152,6,2],[0,219,8,4],[0,219,8,4],[0,445,15,6],[0,503,18,7],[0,523,19,7],[0,576,21,7],[0,576,21,9],[0,669,21,9],[0,720,25,12],[0,903,25,14],[0,1069,25,19],[0,1154,27,24],[0,1510,30,28],[0,1561,30,30],[0,1578,42,32],[0,1640,51,38],[0,1707,72,42],[0,1893,72,43],[0,2003,290,45,2003],[0,2081,431,47],[0,2156,611,47],[0,2248,724,48],[0,2376,808,50],[0,2514,857,53],[0,2625,869,54],[0,2918,877,54],[0,3108,877,54],[0,3314,1078,54],[0,3439,1092,56],[0,3515,1094,59],[0,3738,1167,61],[0,4122,1256,64],[0,4549,1362,64],[0,4898,1431,64],[0,5104,1468,64],[0,5532,1542,65],[0,5980,1931,66],[0,6318,2020,68],[0,6542,2020,73],[0,6923,2069,73],[0,7233,2129,73],[0,7639,2512,86]],
		"Goa":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,6,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,1,0],[0,7,5,0],[0,7,5,0],[0,7,5,0],[0,7,5,0],[0,7,5,0],[0,7,6,0],[0,7,6,0],[0,7,6,0],[0,7,7,0,7],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0],[0,7,7,0]],
		"Gujarat":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[5,0,0,0],[7,0,0,0],[18,0,0,1],[29,0,0,1],[32,1,0,1],[37,1,0,1],[0,43,0,3],[0,43,0,3],[0,45,0,3],[0,58,1,5],[0,69,1,6],[0,73,3,6],[0,82,5,6],[0,87,8,7],[0,95,10,8],[0,105,14,10],[0,122,18,11],[0,144,22,12],[0,165,25,13],[0,165,25,13],[0,179,25,16],[0,241,26,17],[0,308,31,19],[0,432,44,22],[0,539,47,26],[0,617,55,26],[0,695,59,30],[0,871,64,36],[0,1021,74,38],[0,1272,88,48],[0,1604,94,58],[0,1851,106,67,1851],[0,2066,131,77],[0,2272,144,95],[0,2407,179,103],[0,2624,258,112],[0,2815,265,127],[0,3071,282,133],[0,3301,313,151],[0,3548,394,162],[0,3774,434,181],[0,4082,527,197],[0,4395,613,214],[0,4721,735,236],[0,5055,896,262],[0,5428,1042,290],[0,5804,1195,319],[0,6245,1381,368],[0,6625,1500,396],[0,7012,1709,425],[0,7402,1872,449],[0,7796,2091,472],[0,8194,2545,493],[0,8541,2780,513],[0,8903,3246,537]],
		"Haryana":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,14,0,0],[0,14,0,0],[0,14,0,0],[0,14,0,0],[0,14,0,0],[0,14,0,0],[1,14,0,0],[3,14,0,0],[3,14,0,0],[3,14,0,0],[3,14,0,0],[7,14,0,0],[12,14,0,0],[14,14,11,0],[14,14,11,0],[0,30,11,0],[0,30,11,0],[0,33,12,0],[0,33,17,0],[0,36,18,0],[0,40,21,0],[0,43,21,0],[0,43,21,0],[0,49,24,0],[0,49,24,0],[0,59,25,1],[0,84,25,1],[0,90,25,1],[0,147,28,3],[0,169,29,3],[0,169,29,3],[0,177,29,3],[0,185,29,3],[0,185,29,3],[0,199,34,3],[0,199,34,3],[0,205,43,3],[0,205,43,3],[0,225,43,3],[0,233,87,3],[0,233,87,3,233],[0,254,127,3],[0,254,127,3],[0,262,140,3],[0,272,156,3],[0,272,156,3],[0,289,176,3],[0,289,176,3],[0,296,183,3],[0,310,209,3],[0,310,209,3],[0,313,209,3],[0,360,227,4],[0,394,227,4],[0,442,245,5],[0,517,254,6],[0,548,256,6],[0,594,260,7],[0,625,260,7],[0,647,279,8],[0,675,290,9],[0,703,300,10],[0,730,337,11],[0,780,342,11]],
		"Himachal Pradesh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,0,0],[2,0,0,0],[2,0,0,0],[3,0,0,1],[3,0,0,1],[0,3,0,1],[0,3,0,1],[0,3,0,1],[0,3,0,1],[0,3,0,1],[0,3,0,1],[0,3,0,1],[0,3,1,1],[0,6,1,1],[0,6,1,1],[0,6,1,1],[0,13,2,1],[0,13,2,1],[0,18,2,1],[0,18,2,1],[0,18,2,1],[0,28,6,1],[0,32,6,1],[0,32,13,1],[0,32,13,1],[0,33,13,1],[0,35,16,1],[0,35,16,1],[0,38,16,1],[0,39,16,1],[0,39,16,1,39],[0,39,16,1],[0,39,16,1],[0,40,18,1],[0,40,18,1],[0,40,18,1],[0,40,22,1],[0,40,22,1],[0,40,22,1],[0,40,25,1],[0,40,25,1],[0,40,28,1],[0,40,30,1],[0,40,33,1],[0,40,34,1],[0,41,38,1],[0,42,38,2],[0,45,38,2],[0,46,38,2],[0,50,38,2],[0,50,38,2],[0,55,39,2],[0,59,39,2],[0,65,39,2]],
		"Jammu and Kashmir":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,0],[2,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[7,0,1,0],[0,13,1,0],[0,13,1,1],[0,20,1,1],[0,31,1,2],[0,48,2,2],[0,54,2,2],[0,62,2,2],[0,62,2,2],[0,75,3,2],[0,75,3,2],[0,106,4,2],[0,109,4,2],[0,116,4,2],[0,116,4,2],[0,158,4,4],[0,158,4,4],[0,207,6,4],[0,224,6,4],[0,245,6,4],[0,270,16,4],[0,278,30,4],[0,300,36,4],[0,314,38,4],[0,328,42,5],[0,341,51,5],[0,350,56,5,350],[0,368,71,5],[0,380,81,5],[0,407,92,5],[0,427,92,5],[0,454,109,5],[0,494,112,6],[0,523,137,6],[0,546,164,7],[0,565,176,8],[0,581,192,8],[0,614,216,8],[0,639,247,8],[0,666,254,8],[0,701,287,8],[0,726,303,8],[0,741,320,8],[0,775,322,8],[0,793,335,9],[0,823,364,9],[0,836,368,9],[0,861,383,9],[0,879,427,10],[0,934,455,10]],
		"Jharkhand":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,2,0,0],[0,2,0,0],[0,3,0,0],[0,4,0,0],[0,4,0,0],[0,4,0,0],[0,13,0,0],[0,13,0,1],[0,17,0,1],[0,17,0,1],[0,19,0,2],[0,24,0,2],[0,27,0,2],[0,28,0,2],[0,29,0,2],[0,33,0,2],[0,35,0,2],[0,42,0,2,42],[0,46,0,2],[0,45,0,3],[0,49,8,3],[0,55,8,3],[0,59,9,3],[0,67,13,3],[0,82,13,3],[0,82,13,3],[0,105,19,3],[0,107,19,3],[0,111,20,3],[0,111,20,3],[0,115,22,3],[0,115,22,3],[0,115,27,3],[0,125,33,3],[0,127,37,3],[0,132,41,3],[0,132,52,3],[0,156,78,3],[0,157,78,3],[0,160,78,3],[0,172,79,3]],
		"Karnataka":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[4,0,0,0],[4,0,0,0],[4,0,0,0],[6,0,0,1],[6,0,0,1],[6,0,0,1],[6,0,0,1],[11,0,0,1],[11,0,0,1],[14,0,0,1],[15,0,1,1],[15,0,1,1],[26,0,2,1],[33,0,2,1],[37,0,3,1],[41,0,3,1],[0,55,3,2],[0,55,3,2],[0,55,3,2],[0,76,5,3],[0,83,5,3],[0,83,5,3],[0,101,8,3],[0,110,9,3],[0,124,10,3],[0,128,12,3],[0,144,12,4],[0,151,12,4],[0,175,25,4],[0,175,25,4],[0,181,28,5],[0,181,28,5],[0,214,37,6],[0,226,37,6],[0,247,59,6],[0,258,65,9],[0,277,75,11],[0,315,82,13],[0,353,82,13],[0,371,92,13],[0,384,104,14],[0,395,111,16,395],[0,415,114,17],[0,425,129,17],[0,443,141,17],[0,463,150,18],[0,489,153,18],[0,500,158,18],[0,511,188,20],[0,512,193,20],[0,532,215,20],[0,535,216,21],[0,576,235,22],[0,589,251,22],[0,606,282,25],[0,642,304,26],[0,659,324,28],[0,671,331,29],[0,693,354,29],[0,705,366,30],[0,753,376,30],[0,794,386,30],[0,848,424,31],[0,862,426,31],[0,925,433,31]],
		"Kerala":[[1,0,0,0],[1,0,0,0],[2,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,3,0],[3,0,3,0],[3,0,3,0],[3,0,3,0],[3,0,3,0],[8,0,3,0],[9,0,3,0],[15,0,3,0],[17,0,3,0],[17,0,3,0],[19,0,3,0],[19,0,3,0],[22,0,3,0],[23,0,3,0],[24,2,3,0],[25,2,3,0],[25,2,3,0],[26,2,3,0],[33,7,3,0],[45,7,3,0],[60,7,3,0],[87,8,4,0],[101,8,4,0],[0,118,6,0],[0,137,11,0],[0,176,11,0],[0,182,15,1],[0,202,19,1],[0,234,19,1],[0,241,23,2],[0,265,25,2],[0,286,27,2],[0,295,41,2],[0,306,49,2],[0,314,55,2],[0,327,58,2],[0,336,70,2],[0,345,83,2],[0,357,96,2],[0,364,123,2],[0,374,142,2],[0,376,179,3],[0,379,198,3],[0,387,211,3],[0,388,218,3],[0,395,245,3],[0,396,255,3],[0,400,257,3],[0,402,270,3,402],[0,408,291,3],[0,427,323,3],[0,438,324,3],[0,448,324,3],[0,451,331,4],[0,457,338,4],[0,469,342,4],[0,481,355,4],[0,486,359,4],[0,495,369,4],[0,497,383,4],[0,497,392,4],[0,500,400,4],[0,500,401,4],[0,500,462,4],[0,502,462,4],[0,503,469,4],[0,503,474,4],[0,503,484,4],[0,505,485,4],[0,512,489,4],[0,519,489,4],[0,524,489,4]],
		"Ladakh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,0,0],[2,0,0,0],[0,0,0,0],[2,0,0,0],[2,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[4,0,0,0],[6,0,0,0],[8,0,0,0],[8,0,0,0],[10,0,0,0],[13,0,0,0],[13,0,0,0],[13,0,0,0],[13,0,0,0],[13,0,0,0],[0,13,0,0],[0,13,3,0],[0,13,3,0],[0,13,3,0],[0,13,3,0],[0,13,3,0],[0,13,3,0],[0,13,3,0],[0,14,3,0],[0,14,3,0],[0,14,10,0],[0,14,10,0],[0,14,10,0],[0,14,10,0],[0,14,10,0],[0,15,10,0],[0,15,10,0],[0,15,10,0],[0,15,10,0],[0,15,10,0],[0,17,10,0],[0,17,10,0],[0,18,14,0],[0,18,14,0],[0,18,14,0],[0,18,14,0,18],[0,18,14,0],[0,18,14,0],[0,18,14,0],[0,18,14,0],[0,20,14,0],[0,20,14,0],[0,20,14,0],[0,20,14,0],[0,22,16,0],[0,22,16,0],[0,22,16,0],[0,22,17,0],[0,40,17,0],[0,41,17,0],[0,41,17,0],[0,41,17,0],[0,41,17,0],[0,42,17,0],[0,42,17,0],[0,42,17,0],[0,42,21,0],[0,42,21,0],[0,42,21,0]],
		"Madhya Pradesh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[4,0,0,0],[4,0,0,0],[6,0,0,0],[7,0,0,0],[14,0,0,0],[0,20,0,1],[0,20,0,1],[0,30,0,2],[0,30,0,2],[0,47,0,3],[0,47,0,3],[0,66,0,3],[0,99,0,6],[0,104,0,6],[0,104,0,6],[0,165,0,9],[0,165,0,9],[0,229,0,13],[0,229,0,13],[0,259,0,16],[0,259,0,16],[0,443,0,33],[0,564,0,36],[0,604,44,43],[0,730,51,50],[0,987,64,53],[0,1120,64,53],[0,1308,65,57],[0,1355,69,69],[0,1407,127,70],[0,1485,127,74,1485],[0,1540,127,76],[0,1592,148,80],[0,1695,148,81],[0,1852,203,83],[0,1952,210,92],[0,2096,210,99],[0,2168,302,106],[0,2168,302,110],[0,2561,377,119],[0,2561,461,129],[0,2719,482,137],[0,2719,524,145],[0,2846,798,156],[0,2942,798,165],[0,3049,1000,176],[0,3049,1000,176],[0,3138,1099,185],[0,3252,1231,193],[0,3341,1349,200],[0,3614,1676,215],[0,3614,1676,215],[0,3785,1747,221],[0,3986,1860,225]],
		"Maharashtra":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,0,0],[5,0,0,0],[2,0,0,0],[11,0,0,0],[14,0,0,0],[14,0,0,0],[32,0,0,0],[32,0,0,0],[36,3,0,1],[39,3,0,1],[44,3,0,1],[49,3,0,1],[60,3,0,1],[64,3,0,2],[71,3,0,2],[86,3,0,2],[125,3,1,3],[0,124,1,3],[0,130,15,4],[0,180,25,5],[0,186,25,6],[0,198,25,8],[0,216,39,9],[0,302,39,9],[0,335,42,13],[0,335,42,16],[0,490,42,24],[0,490,42,24],[0,748,56,45],[0,868,56,48],[0,1018,79,64],[0,1135,117,72],[0,1364,125,97],[0,1574,188,110],[0,1761,208,127],[0,1985,217,149],[0,2337,229,160],[0,2687,259,178],[0,2919,295,187],[0,3205,300,194],[0,3323,331,201],[0,3651,365,211],[0,4203,507,223,4203],[0,4669,572,232],[0,5221,722,251],[0,5652,789,269],[0,6430,840,283],[0,6817,957,301],[0,7628,1076,323],[0,8068,1188,342],[0,8590,1282,369],[0,9318,1388,400],[0,9915,1593,432],[0,10498,1773,459],[0,11506,1879,485],[0,12296,2000,521],[0,12974,2115,548],[0,14541,2465,583],[0,15525,2819,617],[0,16758,3094,651],[0,17974,3301,694],[0,19063,3470,731],[0,20228,3800,779],[0,22171,4199,832],[0,23401,4786,868],[0,24427,5125,921]],
		"Manipur":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,2,0,2],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0]],
		"Meghalaya":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,7,0,1],[0,7,0,1],[0,9,0,1],[0,11,0,1],[0,11,0,1],[0,11,0,1,11],[0,11,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,0,1],[0,12,10,1],[0,12,10,1],[0,12,10,1],[0,12,10,1],[0,12,10,1],[0,13,10,1],[0,13,10,1],[0,13,10,1],[0,13,10,1]],
		"Mizoram":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0,1],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]],
		"Odisha":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,0],[2,0,0,0],[2,0,0,0],[2,0,0,0],[2,0,0,0],[2,0,0,0],[0,2,0,0],[0,2,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,3,0,0],[0,4,0,0],[0,4,0,0],[0,5,0,0],[0,5,0,0],[0,20,0,0],[0,21,2,0],[0,42,2,1],[0,42,2,1],[0,42,2,1],[0,44,2,1],[0,48,2,1],[0,54,12,1],[0,54,12,1],[0,55,18,1],[0,60,18,1],[0,60,18,1],[0,60,19,1],[0,60,21,1],[0,61,24,1],[0,68,24,1,68],[0,74,24,1],[0,82,30,1],[0,83,32,1],[0,90,33,1],[0,94,33,1],[0,94,33,1],[0,108,35,1],[0,118,37,1],[0,119,38,1],[0,125,39,1],[0,143,41,1],[0,149,55,1],[0,160,56,1],[0,163,60,1],[0,170,60,1],[0,175,60,1],[0,185,61,2],[0,219,62,2],[0,271,63,2],[0,294,63,2],[0,377,68,3],[0,414,85,3],[0,437,116,3]],
		"Puducherry":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,3,1,0],[0,3,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,5,1,0],[0,7,1,0],[0,7,1,0],[0,7,1,0],[0,7,1,0],[0,7,1,0],[0,7,1,0],[0,7,1,0],[0,7,3,0],[0,7,3,0],[0,7,3,0,7],[0,7,3,0],[0,7,3,0],[0,7,3,0],[0,7,3,0],[0,7,3,0],[0,7,3,0],[0,8,3,0],[0,8,3,0],[0,8,3,0],[0,8,3,0],[0,8,5,0],[0,8,5,0],[0,8,5,0],[0,8,5,0],[0,9,6,0],[0,9,6,0],[0,9,6,0],[0,9,6,0],[0,9,6,0],[0,9,6,0],[0,9,6,0],[0,12,6,0],[0,13,9,1]],
		"Punjab":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,1],[2,0,0,1],[13,0,0,1],[21,0,0,1],[21,0,0,1],[29,0,0,1],[29,0,0,1],[0,33,0,1],[0,33,0,1],[0,38,1,1],[0,38,1,1],[0,38,1,1],[0,41,1,3],[0,42,1,3],[0,46,1,4],[0,48,1,5],[0,57,1,5],[0,57,1,5],[0,76,4,6],[0,91,4,7],[0,91,4,7],[0,101,4,8],[0,101,4,8],[0,132,5,11],[0,151,5,11],[0,167,14,11],[0,176,14,12],[0,186,14,13],[0,186,27,13],[0,186,27,13],[0,202,27,13],[0,219,31,16],[0,219,31,16,219],[0,245,39,16],[0,251,49,16],[0,277,65,16],[0,277,65,16],[0,298,67,17],[0,298,67,17],[0,313,71,18],[0,313,71,18],[0,322,71,19],[0,357,90,19],[0,357,90,19],[0,480,90,19],[0,772,112,20],[0,1102,117,21],[0,1233,128,23],[0,1451,133,25],[0,1516,135,27],[0,1644,149,28],[0,1731,152,29],[0,1762,157,31],[0,1823,166,31],[0,1877,168,31],[0,1914,171,32]],
		"Rajasthan":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[1,14,0,0],[1,14,0,0],[1,14,0,0],[1,14,0,0],[1,14,0,0],[1,14,0,0],[1,14,0,0],[1,2,0,0],[1,2,0,0],[1,2,0,0],[1,2,1,0],[2,2,3,0],[2,2,3,0],[2,2,3,0],[2,2,3,0],[5,2,3,0],[15,2,3,0],[15,2,3,0],[22,2,3,0],[26,2,3,0],[30,2,3,0],[34,2,3,0],[0,41,3,0],[0,41,3,0],[0,54,3,0],[0,55,3,0],[0,59,3,0],[0,74,3,0],[0,93,3,0],[0,108,3,0],[0,167,3,0],[0,200,21,0],[0,200,21,0],[0,274,21,0],[0,288,21,3],[0,328,21,3],[0,383,21,3],[0,463,21,3],[0,553,21,3],[0,700,21,3],[0,812,21,3],[0,879,133,3],[0,1005,147,3],[0,1023,147,3],[0,1131,164,11],[0,1229,183,11],[0,1351,183,11],[0,1478,183,14,1478],[0,1576,205,25],[0,1801,230,25],[0,1890,230,27],[0,1964,230,27],[0,2034,230,27],[0,2083,493,33],[0,2185,518,41],[0,2262,669,46],[0,2364,768,51],[0,2438,768,51],[0,2584,836,58],[0,2666,1116,62],[0,2772,1121,65],[0,2886,1356,71],[0,3061,1394,77],[0,3158,1525,89],[0,3317,1596,92],[0,3427,1596,97],[0,3579,1916,101],[0,3708,2026,106],[0,3814,2176,107],[0,3988,2264,113],[0,4126,2378,117]],
		"Tamil Nadu":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,1,0],[3,0,1,0],[3,0,1,0],[5,2,1,0],[7,2,1,0],[13,2,1,0],[16,2,1,0],[0,26,1,1],[0,29,1,1],[0,40,2,1],[0,49,4,1],[0,67,4,1],[0,74,4,1],[0,234,6,1],[0,234,6,1],[0,309,6,1],[0,411,6,2],[0,485,6,3],[0,571,8,5],[0,621,8,5],[0,690,19,7],[0,738,21,8],[0,834,21,8],[0,911,44,8],[0,969,44,10],[0,1075,50,11],[0,1173,58,11],[0,1204,81,12],[0,1242,118,14],[0,1267,180,15],[0,1323,283,15],[0,1372,365,15],[0,1477,411,15,1477],[0,1520,457,17],[0,1596,635,18],[0,1629,662,18],[0,1683,752,20],[0,1755,866,22],[0,1821,960,23],[0,1885,1020,24],[0,1937,1101,24],[0,2058,1168,25],[0,2162,1210,27],[0,2323,1258,27],[0,2526,1312,28],[0,2757,1341,29],[0,3023,1379,30],[0,3550,1409,31],[0,4058,1485,33],[0,4829,1516,35],[0,5409,1547,37],[0,6009,1605,40],[0,6535,1824,44],[0,7204,1959,47],[0,8002,2051,53],[0,8718,2134,61]],
		"Telengana":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[3,0,1,0],[3,0,1,0],[3,2,1,0],[4,2,1,0],[4,2,1,0],[8,9,1,0],[10,11,1,0],[11,11,1,0],[22,10,1,0],[25,10,1,0],[25,10,1,0],[0,44,1,0],[0,45,1,0],[0,56,1,0],[0,66,1,1],[0,71,1,1],[0,79,1,1],[0,96,1,3],[0,107,1,3],[0,158,1,7],[0,159,1,7],[0,269,32,7],[0,321,34,7],[0,364,35,7],[0,427,35,7],[0,442,35,7],[0,442,35,7],[0,504,43,9],[0,504,43,9],[0,562,100,16],[0,624,100,17],[0,647,120,18],[0,698,120,18],[0,743,186,18],[0,791,186,18],[0,844,186,18],[0,873,190,21,873],[0,919,190,23],[0,945,194,23],[0,960,197,24],[0,984,253,26],[0,984,253,26],[0,991,280,26],[0,1002,280,26],[0,1004,321,26],[0,1012,367,26],[0,1012,367,26],[0,1039,441,26],[0,1039,441,26],[0,1063,458,28],[0,1082,490,29],[0,1085,585,29],[0,1096,585,29],[0,1107,628,29],[0,1123,650,29],[0,1133,700,29],[0,1163,750,30],[0,1196,750,30],[0,1275,800,30],[0,1326,830,32]],
		"Tripura":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,0,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0,2],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,1,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,2,2,0],[0,4,2,0],[0,16,2,0],[0,29,2,0],[0,43,2,0],[0,43,2,0],[0,65,2,0],[0,118,2,0],[0,134,2,0],[0,150,2,0],[0,152,2,0],[0,154,2,0]],
		"Uttarakhand":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,0,0,0],[3,1,0,0],[3,1,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,7,2,0],[0,7,2,0],[0,7,2,0],[0,7,2,0],[0,7,2,0],[0,10,2,0],[0,16,2,0],[0,22,2,0],[0,26,4,0],[0,31,5,0],[0,31,5,0],[0,35,5,0],[0,35,5,0],[0,35,5,0],[0,35,5,0],[0,35,5,0],[0,35,7,0],[0,37,9,0],[0,37,9,0],[0,37,9,0],[0,42,9,0],[0,42,9,0],[0,44,11,0,44],[0,46,18,0],[0,46,19,0],[0,46,23,0],[0,47,24,0],[0,48,25,0],[0,48,26,0],[0,51,33,0],[0,51,33,0],[0,54,34,0],[0,55,36,0],[0,57,36,0],[0,58,36,0],[0,59,39,0],[0,60,39,1],[0,60,39,1],[0,61,39,1],[0,61,39,1],[0,61,39,1],[0,63,46,1],[0,67,46,1],[0,68,46,1],[0,68,46,1],[0,69,46,1]],
		"Uttar Pradesh":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[6,0,0,0],[7,0,0,0],[7,0,0,0],[7,0,0,0],[7,0,0,0],[7,0,0,0],[7,0,0,0],[9,0,0,0],[10,1,0,0],[10,1,0,0],[11,1,5,0],[12,1,4,0],[12,1,4,0],[14,1,5,0],[15,1,5,0],[18,1,9,0],[22,1,9,0],[23,1,9,0],[26,1,9,0],[30,1,9,0],[32,1,11,0],[36,1,11,0],[0,41,11,0],[0,41,11,0],[0,55,11,0],[0,65,11,0],[0,82,11,0],[0,101,14,0],[0,103,14,2],[0,113,14,2],[0,172,14,2],[0,174,19,2],[0,227,19,2],[0,305,21,3],[0,305,21,3],[0,343,26,3],[0,410,31,4],[0,410,31,4],[0,433,32,4],[0,452,45,5],[0,483,47,5],[0,657,49,5],[0,735,51,11],[0,773,68,13],[0,846,74,14],[0,969,86,14],[0,1084,108,17],[0,1176,129,17,1176],[0,1294,140,20],[0,1412,165,21],[0,1509,187,21],[0,1604,206,24],[0,1778,248,26],[0,1793,261,27],[0,1955,335,31],[0,1955,335,31],[0,2115,477,36],[0,2134,510,39],[0,2281,555,41],[0,2328,654,42],[0,2626,698,43],[0,2742,758,45],[0,2859,944,53],[0,2880,987,56],[0,2998,1130,60],[0,3071,1250,62],[0,3214,1387,66],[0,3373,1499,74],[0,3467,1653,74],[0,3573,1758,80],[0,3664,1873,82]],
		"West Bengal":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,0,0,0],[1,0,0,0],[2,0,0,0],[3,0,0,0],[4,0,0,0],[7,0,0,0],[9,0,0,1],[9,0,0,1],[0,10,0,1],[0,10,0,1],[0,15,0,1],[0,18,0,1],[0,22,0,1],[0,26,0,2],[0,37,6,3],[0,53,6,3],[0,63,3,3],[0,69,3,3],[0,80,10,3],[0,80,10,3],[0,91,13,3],[0,99,13,5],[0,103,16,5],[0,116,16,5],[0,126,16,5],[0,134,19,5],[0,152,29,7],[0,190,36,7],[0,213,37,7],[0,231,42,7],[0,255,51,10],[0,287,55,10],[0,310,62,12],[0,339,66,12,339],[0,392,73,12],[0,423,73,15],[0,456,79,15],[0,514,103,15],[0,571,103,18],[0,611,105,18],[0,649,105,20],[0,697,109,20],[0,725,119,22],[0,758,124,22],[0,795,139,33],[0,795,139,33],[0,922,151,33],[0,963,151,35],[0,1259,218,133],[0,1344,364,140],[0,1456,364,144],[0,1548,364,151],[0,1678,364,160],[0,1786,372,171],[0,1939,417,185],[0,2063,499,190],[0,2173,612,198]],
	};
	const legends = [[1,30],[1,31],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18],[2,19],[2,20],[2,21],[2,22],[2,23],[2,24],[2,25],[2,26],[2,27],[2,28],[2,29],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18],[3,19],[3,20],[3,21],[3,22],[3,23],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],[4,16],[4,17],[4,18],[4,19],[4,20],[4,21],[4,22],[4,23],[4,24],[4,25],[4,26],[4,27],[4,28],[4,29],[4,30],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13]];
	let canvas = document.getElementById("canvas");
	let canHgt = 900;
	let canWid = 930;
	canvas.style.height = canHgt+'px';
	canvas.style.width = canWid+'px';
	canvas.height = canHgt*2;
	canvas.width = canWid*2;
	let ctx = canvas.getContext("2d");
	ctx.strokeStyle = '#FFFDDD';
	ctx.fillStyle = 'rgba(255,0,0,1)';
	canvas.width = canWid;
	canvas.height = canHgt;
	let colorArray = [[235, 255, 0],[255, 246, 0],[255, 195, 2],[255, 210, 65],[255, 171, 63],[255, 143, 0],[255, 132, 63],[255, 91, 0],[255, 67, 67],[255, 5, 5],[176, 14, 14]]

	let maxArr = 33;
	let barArray = [];
	let count = 0; 
	const ticks = legends.length;
	
	let tick;
	
	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}
	function getColor(area){
		return colorArray[Math.floor(Math.random() * (colorArray.length))];
	}
	
	function Bar(x, y, length, dl, color, index, label){
		this.posX = 0;
		this.width = (canHgt/(maxArr))-1;
		this.posY = 2+ (y * (this.width+5));
		this.dl = dl;
		this.length = 20;
		this.color = color;
		this.index = index;
		this.label = label;
		this.dateCounter = this.dl[0][0]+this.dl[0][1];
		this.dateCounterLabel;
		
		this.draw = function(i,dateCounter){
			
			if(this.dateCounter<10000 && this.dateCounter>0){
				
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.rect(this.posX, this.posY, (this.length), this.width);
				ctx.fill();
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = '#0003'
				ctx.stroke();
				ctx.closePath();
				
				ctx.beginPath();
				ctx.fillStyle = '#333';
				ctx.font = '600 24px monty';
				ctx.fillText(this.label, this.length + 20 , this.posY+10+(this.width/2));
				this.textLabelWidth = ctx.measureText(this.label).width;
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#333';
				ctx.font = '400 24px monty';
				ctx.fillText(' ( '+this.dateCounterLabel+' )', this.length+ this.textLabelWidth + 20 , this.posY+10+(this.width/2));
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#141889';
				ctx.rect(this.posX, this.posY, (this.lengthD), this.width);
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#00FF00';
				ctx.rect(this.posX+this.lengthD, this.posY, (this.lengthR), this.width);
				ctx.fill();
				ctx.closePath();

			}else if(this.dateCounter>0){
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.rect(this.posX, this.posY, (this.posX+this.length), this.width);
				ctx.fill();
				ctx.closePath();
				
				ctx.beginPath();
				ctx.fillStyle = '#141889';
				ctx.rect(this.posX, this.posY, (this.posX+this.lengthD), this.width);
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#00FF00';
				ctx.rect(this.posX+this.lengthD, this.posY, (this.lengthR), this.width);
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#FEE';
				ctx.font = '600 24px monty';
				ctx.fillText(this.label, canWid - 300 , this.posY+10+(this.width/2));
				this.textLabelWidth = ctx.measureText(this.label).width;
				ctx.fill();
				ctx.closePath();

				ctx.beginPath();
				ctx.fillStyle = '#FEE';
				ctx.font = '400 24px monty';
				ctx.fillText(' ( '+this.dateCounterLabel+' )', canWid+ this.textLabelWidth - 300 , this.posY+10+(this.width/2));
				ctx.fill();
				ctx.closePath();
			}
		};
		this.update = function(i,dateCounter){

				this.index = i;
				this.posY = (this.index * (this.width+1));
				this.dateCounter =this.dl[dateCounter][0]+this.dl[dateCounter][1]; 
				this.length = (this.dateCounter*0.075);
				this.lengthR = (this.dl[dateCounter][2]*0.075);
				this.lengthD = (this.dl[dateCounter][3]*0.075);

				let colorIndex;
				if(this.dateCounter>=0 && this.dateCounter <= 50){
					colorIndex = 0
				}else if(this.dateCounter>50 && this.dateCounter <= 100){
					colorIndex = 1
				}else if(this.dateCounter>100 && this.dateCounter <= 250){
					colorIndex = 2
				}else if(this.dateCounter>250 && this.dateCounter <= 500){
					colorIndex = 3
				}else if(this.dateCounter>500 && this.dateCounter <= 750){
					colorIndex = 4
				}else if(this.dateCounter>750 && this.dateCounter <= 1000){
					colorIndex = 5
				}else if(this.dateCounter>1000 && this.dateCounter <= 1500){
					colorIndex = 6
				}else if(this.dateCounter>1500 && this.dateCounter <= 2000){
					colorIndex = 7
				}else if(this.dateCounter>2000 && this.dateCounter <= 3000){
					colorIndex = 8
				}else if(this.dateCounter>3000 && this.dateCounter <= 4000){
					colorIndex = 9
				}else{
					colorIndex = 10
				}

				this.color = 'rgba('+colorArray[colorIndex][0]+','+colorArray[colorIndex][1]+','+colorArray[colorIndex][2]+',1)'
				if(this.dateCounter>1000){
					this.dateCounterLabel = parseFloat(this.dateCounter/1000).toFixed(1)+'K';
				}else{
					this.dateCounterLabel = this.dateCounter
				}
			this.draw(i,dateCounter);
		};
		
	}

	function animateCircles(tickCounter){
		// requestAnimationFrame(animateCircles);
		if(tickCounter!==tick && tickCounter<ticks){
			
			tick = tickCounter
			ctx.clearRect(0,0,canWid,canHgt);
			barArray = barArray.sort(function(a, b){
				return ((b.dl[tick][0]+b.dl[tick][1]) - (a.dl[tick][0]+a.dl[tick][1]));
				// return ((b.dl[tick][2]) - (a.dl[tick][2]));
			});
			for (let i = 0; i < barArray.length; i++) {
				barArray[i].update(i,tick);
			}
			if(legends[tick][1]>9){
				$('.date').text(legends[tick][1])
			}else{
				$('.date').text('0'+legends[tick][1])
			}
			if(legends[tick][0] == 2){
				$('.month').text('Feb')
			}else if(legends[tick][0] == 3){
				$('.month').text('Mar')
			}else if(legends[tick][0] == 4){
				$('.month').text('Apr')
			}else if(legends[tick][0] == 5){
				$('.month').text('May')
			}
			$('.stateName').addClass('active')
			$('.legendContainer').addClass('active');
			setTimeout(()=>{animateCircles(tickCounter+1)},150)
		}else{

		}
		
	}

	let init = function(){
		barArray = [];
		height = window.innerHeight;
		width = window.innerWidth;
		canvas.width = canWid;
		canvas.height = canHgt;
		

		// for (const key in hi) {
		// 	if (hi.hasOwnProperty(key)) {
		// 		if(dataTotal[key]){
		// 			dataTotal[key][ticks-1]=hi[key]
		// 		}else{
		// 			console.log(key)
		// 		}
		// 	}
		// }
		
		
		// for (let i = 0; i < dataIndex.length; i++) {
		// 	const element = dataIndex[i];
		// 	for (const key in dataTotal) {
		// 		if (dataTotal.hasOwnProperty(key)) {
		// 			dataTotal[key].push([0,0,0,0]);
		// 		}
		// 	}
			
		// 	for (const state in element['states']) {
		// 		if (element['states'].hasOwnProperty(state)) {
		// 			const elt = element['states'][state];
		// 			if(dataTotal[state]){
		// 				dataTotal[state][i] = elt
		// 			}else{
		// 				console.log(state)
		// 			}
		// 		}
		// 	}
		// }
		// console.log(JSON.stringify(dataTotal))
		// console.log(dataTotal)
		// console.log(legends)
		for (const country in dataTotal) {
			if (dataTotal.hasOwnProperty(country)) {
				const element = dataTotal[country];
				barArray.push(new Bar(0, count, element[0] , element, 0 , count, country));
			}
			count++;
		}
		// ticks = count-1
		setTimeout(()=>{
			animateCircles(0);
		},1000)
	};
	init();
})