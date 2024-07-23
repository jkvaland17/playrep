const Reports = ["/Dashboard", "/revenue", "/pockerrevenue", "/pointtransfer", "/mutiplayerpointtransfer", "/dailystatus"];  
    const DrawDetails = ["/funtarget", "/funroullet", "/triplefun", "/funab"];  
    const agentmail = ["/agentmail"];  
    const weekreport = ["/weekreport"];  

export const menuItems = [  
		{  
			title: 'Reports',  
			path: '#',  
			subItems: [  
				{ title: 'Revenue', path: '/revenue' },  
				{ title: 'Poker Revenue', path: '/pockerrevenue' },  
				{ title: 'Point Transfer', path: '/pointtransfer' },  
				{ title: 'Multiplayer Point Transfer', path: '/mutiplayerpointtransfer' },  
				{ title: 'Daily Status', path: '/dailystatus' },  
			],  
			includes: Reports,
		},  
		{  
			title: 'Draw Details',  
			path: '#',  
			subItems: [  
				{ title: 'Fun Target', path: '/funtarget' },  
				{ title: 'Fun Roullet', path: '/funroullet' },  
				{ title: 'Triple Fun', path: '/triplefun' },  
				{ title: 'Fun AB', path: '/funab' },  
			],  
			includes: DrawDetails,   
		},  
		{  
			title: 'Mail Report',  
			path: '#',  
			subItems: [  
				{ title: 'Agent Mail', path: '/agentmail' },  
			],  
			includes: agentmail,
		},  
		{  
			title: 'Weekly Details Reports',  
			path: '/weekreport',  
			includes: weekreport, 
			isSingle: true,  
		},  
	]; 
