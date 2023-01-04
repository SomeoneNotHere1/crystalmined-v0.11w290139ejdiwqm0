const conveyor={
	move(field,i){
	let conv=field[i]
	if(conv.texture=='convRight.png'){
			if(field[i+1].texture=='convRight.png' || field[i+1].texture=='convUp.png' || field[i+1].texture=='movything.png'){
				let nextConv=field[i+1]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						nextConv.overlayTexture=conv.overlayTexture
						conv.overlayTexture=null
					}
					else{
						conv.cooldown++	
					}
				}
			}
			if(field[i+1].texture=='upgraderblue.png'){
				let nextConv=field[i+2]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						if(nextConv.texture=='convRight.png' || nextConv.texture=='convUp.png' || nextConv.texture=='movything.png'){
							if(conv.overlayTexture=='item1.png'){
								nextConv.overlayTexture='blue.png'
								conv.overlayTexture=null
							}
						}
					}
					else{
						conv.cooldown++	
					}
				}
			}
			if(field[i+1].texture=='upgraderred.png'){
				let nextConv=field[i+2]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						if(nextConv.texture=='convRight.png' || nextConv.texture=='convUp.png' || nextConv.texture=='movything.png'){
							if(conv.overlayTexture=='blue.png'){
								nextConv.overlayTexture='red.png'
								conv.overlayTexture=null
							}
						}
					}
					else{
						conv.cooldown++	
					}
				}
			}
			if(field[i+1].texture=='upgraderpurple.png'){
				let nextConv=field[i+2]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						if(nextConv.texture=='convRight.png' || nextConv.texture=='convUp.png' || nextConv.texture=='movything.png'){
							if(conv.overlayTexture=='red.png'){
								nextConv.overlayTexture='purple.png'
								conv.overlayTexture=null
							}
						}
					}
					else{
						conv.cooldown++	
					}
				}
			}
			if(field[i+1].texture=='upgraderpurple.png'){
				let nextConv=field[i+2]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						if(nextConv.texture=='convRight.png' || nextConv.texture=='convUp.png' || nextConv.texture=='movything.png'){
							if(conv.overlayTexture=='red.png'){
								nextConv.overlayTexture='purple.png'
								conv.overlayTexture=null
							}
						}
					}
					else{
						conv.cooldown++	
					}
				}
			}
			if(field[i+1].texture=='upgraderblack.png'){
				let nextConv=field[i+2]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						if(nextConv.texture=='convRight.png' || nextConv.texture=='convUp.png' || nextConv.texture=='movything.png'){
							if(conv.overlayTexture=='purple.png'){
								nextConv.overlayTexture='black.png'
								conv.overlayTexture=null
							}
						}
					}
					else{
						conv.cooldown++	
					}
				}
			}
		}
	if(conv.texture=='convLeft.png'){
			if(field[i-1].texture=='convLeft.png' || field[i-1].texture=='convUp.png' || field[i-1].texture=='movything.png'){
			let nextConv=field[i-1]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						nextConv.overlayTexture=conv.overlayTexture
						conv.overlayTexture=null
					}
					else{
						conv.cooldown++	
					}
				}
			}
		}
	if(conv.texture=='convUp.png'){
			if(field[i-20].texture=='convUp.png' || field[i-20].texture=='convLeft.png' || field[i-20].texture=='convRight.png'){
			let nextConv=field[i-20]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						nextConv.overlayTexture=conv.overlayTexture
						conv.overlayTexture=null
					}
					else{
						conv.cooldown++	
					}
				}
			}
		}
	if(conv.texture=='movything.png'){
			if(field[i+20].texture=='movything.png' || field[i+20].texture=='convLeft.png' || field[i+20].texture=='convRight.png'){
			let nextConv=field[i+20]
				if(nextConv.texture != null && nextConv.overlayTexture == null){			
					if(conv.cooldown>=(40/*-gameInfo.convSpeed*/)){
						conv.cooldown=0
						nextConv.overlayTexture=conv.overlayTexture
						conv.overlayTexture=null
					}
					else{
						conv.cooldown++	
					}
				}
			}
		}
		
		
	}
}








