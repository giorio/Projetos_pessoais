function SorteioItemMagico(categoria) {
	var sort = Math.floor(Math.random() * 100 + 1);				//Gera um nº aleatório entre 0 e 100

	switch (categoria) {
		case 1:
			if (sort < 92) {
				if (sort < 82) {
					if (sort < 47) {
						if (sort < 45) {
							if (sort < 10) {
								if (sort < 5) { var itemMagico = sorteioEquipDef(1);
								} else { var itemMagico = SorteioArma(1);}
							} else { var itemMagico = sorteioPocao(1);}
						} else { var itemMagico = sorteioAneis(1);}
					} else { var itemMagico = sorteioPergaminhos(1);}
				} else { var itemMagico = sorteioVarinhas(1);}
			} else { var itemMagico = sorteioItemMaravilhoso(1);};
			break;
		case 2:
			if (sort < 84) {
				if (sort < 69) {
					if (sort < 66) {
						if (sort < 51) {
							if (sort < 41) {
								if (sort < 31) { 
									if (sort < 21) {
										if (sort < 11) { var itemMagico = sorteioEquipDef(2);
										} else {var itemMagico = SorteioArma(2);}
									} else {var itemMagico = sorteioPocao(2);}
								} else { var itemMagico = sorteioAneis(2);}
							} else { var itemMagico =  sorteioBastoes(2);}
						} else { var itemMagico = sorteioPergaminhos(2);}
					} else { var itemMagico = sorteioCajados(2);}
				} else { var itemMagico = sorteioVarinhas(2);}
			} else { var itemMagico = sorteioItemMaravilhoso(2);};
			break;
		case 3:
			if (sort < 81) {
				if (sort < 76) {
					if (sort < 56) {
						if (sort < 46) {
							if (sort < 36) {
								if (sort < 26) { 
									if (sort < 21) {
										if (sort < 11) { var itemMagico = sorteioEquipDef(3);
										} else {var itemMagico = SorteioArma(3);}
									} else {var itemMagico = sorteioPocao(3);}
								} else { var itemMagico = sorteioAneis(3);}
							} else { var itemMagico =  sorteioBastoes(3);}
						} else { var itemMagico = sorteioPergaminhos(3);}
					} else { var itemMagico = sorteioCajados(3);}
				} else { var itemMagico = sorteioVarinhas(3);}
			} else { var itemMagico = sorteioItemMaravilhoso(3);};
			break;
	};
	document.getElementById('itemMagico').innerHTML = itemMagico;
};

function calcularPrecoDef(precoBase) {						/*Calcular o preço a ser adiocionado ao equipamento*/
	var preco = 0;
	switch (precoBase) {
		case 1:
			preco+=1000;
			break;
		case 2:
			preco+=4000;
			break;
		case 3:
			preco+=9000;
			break;
		case 4:
			preco+=16000;
			break;
		case 5:
			preco+=25000;
			break;
		case 6:
			preco+=36000;
			break;
		case 7:
			preco+=49000;
			break;
		case 8:
			preco+=64000;
			break;
		case 9:
			preco+=81000;
			break;
		case 10:
			preco+=100000;
			break;
	};
	return preco;
};

function sorteioEquipDef(cat) {															//função para sorteio de equipamento de defesa
	var equipamento	= 0;																//1 - escudo e 2 - armadura	var controle = false;
	var precoBase = 0;
	var multHab = new Array();
	var preco = 0;
	var sorteioEqui = Math.floor(Math.random() * 100 + 1);

	switch(cat) {
		case 1:
			do{
				var sorteioEqui = Math.floor(Math.random() * 100 + 1);
				if (sorteioEqui<92) {
					if (sorteioEqui<90) {
						if (sorteioEqui<88) {
							if (sorteioEqui<86) {
								if (sorteioEqui<81) {
									if (sorteioEqui<61) {
										equipamento = 1;
										var bonus = "+1";
										precoBase = 1;
										controle=false;
									} else {
										equipamento = 2;
										var bonus = "+1";
										precoBase = 1;
										controle=false;
									}
								} else {
									equipamento = 1;
									var bonus = "+2";
									precoBase = 2;
									controle=false;
								}
							} else {
								equipamento = 2;
								var bonus = "+2";
								precoBase = 2;
								controle=false;
							}
						} else {
							var sorteioArmdEsp = Math.floor(Math.random() * 100);
							controle=false;
						}
					} else {
						var sorteioEscEsp = Math.floor(Math.random() * 100);
						controle=false;
					}
				} else {
					do {
						var sortHab = Math.floor(Math.random() * 100);
						var mult = false;
						if (sortHab == 99) {
							sortHab = Math.floor(Math.random() * 100);
							mult=true;
							multHab.push(sortHab);};
					} while (mult);
					multHab.push(sortHab);
					controle=true;
				} 
			} while (controle);
			break;
		case 2:
			do{ 
                sorteioEqui = Math.floor(Math.random() * 100 + 1);
				if (sorteioEqui<64) {
					if (sorteioEqui<61) {
						if (sorteioEqui<58) {
							if (sorteioEqui<56) {
								if (sorteioEqui<51) {
									if (sorteioEqui<41) {
										if (sorteioEqui<31) {
											if (sorteioEqui<21) {
												if (sorteioEqui<11) {
													if (sorteioEqui<06) {
														equipamento = 1;
														var bonus = "+1";
														precoBase = 1;
														controle=false;
													} else {
														equipamento = 2;
														var bonus = "+1";
														precoBase = 1;
														controle=false;
													}
												} else {
													equipamento = 1;
													var bonus = "+2";
													precoBase = 2;
													controle=false;
												}
											} else {
												equipamento = 2;
												var bonus = "+2";
												precoBase = 2;
												controle=false;
											}
										} else {
											equipamento = 1;
											var bonus = "+3";
											precoBase = 3;
											controle=false;
										}
									} else {
										equipamento = 2;
										var bonus = "+3";
										precoBase = 3;
										controle=false;
									}
								} else {
									equipamento = 1;
									var bonus = "+4";
									precoBase = 4;
									controle=false;
								}
							} else {
								equipamento = 2;
								var bonus = "+4";
								precoBase = 4;
								controle=false;
							}
						} else {
							var sorteioArmdEsp = Math.floor(Math.random() * 100);
							controle=false;
						}
					} else {
						var sorteioEscEsp = Math.floor(Math.random() * 100);
						controle=false;
					}
				} else {
					do {
						var sortHab = Math.floor(Math.random() * 100);
  						var mult = false;
						if (sortHab == 99) {
							sortHab = Math.floor(Math.random() * 100);
							mult=true;
							multHab.push(sortHab);};
					} while (mult);
					multHab.push(sortHab);
					controle=true;
				} 
			} while (controle);
			break;
		case 3:
			do{ 
				var sorteioEqui = Math.floor(Math.random() * 100 + 1);
				if (sorteioEqui<64) {
					if (sorteioEqui<61) {
						if (sorteioEqui<58) {
							if (sorteioEqui<50) {
								if (sorteioEqui<39) {
									if (sorteioEqui<28) {
										if (sorteioEqui<17) {
											if (sorteioEqui<9) {
												equipamento = 1;
												var bonus = "+3";
												precoBase = 3;
												controle=false;
											} else {
												equipamento = 2;
												var bonus = "+3";
												precoBase = 3;
												controle=false;
											}
										} else {
											equipamento = 1;
											var bonus = "+4";
											precoBase = 4;
											controle=false;
										}
									} else {
										equipamento = 2;
										var bonus = "+4";
										precoBase = 4;
										controle=false;
									}
								} else {
									equipamento = 1;
									var bonus = "+5";
									precoBase = 5;
									controle=false;
								}
							} else {
								equipamento = 2;
								var bonus = "+5";
								precoBase = 5;
								controle=false;
							}
						} else {
							var sorteioArmdEsp = Math.floor(Math.random() * 100);
							controle=false;
						}
					} else {
						var sorteioEscEsp = Math.floor(Math.random() * 100);
						controle=false;
					}
				} else {
					do {
						var sortHab = Math.floor(Math.random() * 100);
						var mult = false;
						if (sortHab == 99) {
							sortHab = Math.floor(Math.random() * 100);
							mult=true;
							multHab.push(sortHab);};
					} while (mult);
					multHab.push(sortHab);
					controle=true;
				} 
			} while (controle);
			break;
	};


	if (equipamento == 1) {															//Cria sorteio para escudo
		var sorteioEsc = Math.floor(Math.random() * 100);
		var escudo = ["Broquel","Broquel","Broquel","Broquel","Broquel","Broquel","Broquel","Broquel","Broquel","Broquel","Escudo Pequeno de Madeira","Escudo Pequeno de Madeira","Escudo Pequeno de Madeira","Escudo Pequeno de Madeira","Escudo Pequeno de Madeira","Escudo Pequeno de Metal","Escudo Pequeno de Metal","Escudo Pequeno de Metal","Escudo Pequeno de Metal","Escudo Pequeno de Metal","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Madeira","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo Grande de Metal","Escudo de Corpo","Escudo de Corpo","Escudo de Corpo","Escudo de Corpo","Escudo de Corpo"];
		var valorEscud = [165,165,165,165,165,165,165,165,165,165,153,153,153,153,153,159,159,159,159,159,157,157,157,157,157,157,157,157,157,157,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,170,180,180,180,180,180];
		preco += valorEscud[sorteioEsc];

		if (multHab.length>0) {
			var habilEscud = new Array();
			var valorHabilEscud = new Array();

			if (cat == 1) {
				habilEscud = ["Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Cegante","Cegante","Cegante","Cegante","Cegante","Cegante","Cegante","Cegante","Cegante","Cegante","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Animado","Animado","Animado","Animado","Animado","Resistência à Magia (13)","Resistência à Magia (13)","Resistência à Magia (13)"];
				valorHabilEscud = [2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15000,15000,15000,15000,15000,15000,15000,15000];
			};

			if (cat == 2) {
				habilEscud = ["Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Esmagamento","Cegante","Cegante","Cegante","Cegante","Cegante","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Animado","Animado","Animado","Animado","Animado","Animado","Animado","Resistência à Magia (13)","Resistência à Magia (13)","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência Sônico","Resistência Sônico","Resistência Sônico","Resistência Sônico","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Resistência à Magia (15)","Resistência à Magia (15)","Resistência à Magia (15)","Selvagem","Selvagem"];
				valorHabilEscud = [2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,1,1,1,1,1,1,1,1,1,1,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,2,2,2,2,2,2,2,2,2,2,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
			};

			if (cat == 3) {
				habilEscud = ["Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Apanhador de Flechas","Esmagamento","Esmagamento","Esmagamento","Cegante","Cegante","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Deflexão de Flechas","Animado","Animado","Animado","Animado","Animado","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência Sônico","Resistência Sônico","Resistência Sônico","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Resistência à Magia (15)","Resistência à Magia (15)","Selvagem","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência à Magia (17)","Resistência à Magia (17)","Controlar Mortos-Vivos","Fortificação Pesada","Fortificação Pesada","Fortificação Pesada","Fortificação Pesada","Reflexão","Reflexão","Resistência à Magia (19)","Resistência a Ácido Maior","Resistência ao Frio Maior","Resistência à Eletricidade Maior","Resistência ao Fogo Maior","Resistência Sônico Maior","Resistência Sônico Maior"];
				valorHabilEscud =[2700,2700,2700,2700,2700,1,1,1,3750,3750,3750,3750,3750,3750,3750,2,2,2,2,2,15000,15000,15000,15000,15000,15000,15000,15000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,42000,42000,42000,42000,42000,42000,42000,42000,42000,4,49000,49000,5,5];
			};
			
			for (var i = 0; i < multHab.length; i++) {
				multHab.push(habilEscud[multHab[0]]);
				if (valorHabilEscud[multHab[0]] < 10) {
					precoBase += valorHabilEscud[multHab[0]];
				} else {
					preco += valorHabilEscud[multHab[0]];
				};
              multHab.shift();
			};
		};

		preco += calcularPrecoDef(precoBase);

		return "Escudo: " + escudo[sorteioEsc] + " " + bonus + " " + multHab.toString() + " com o valor: " + preco + " PO.";
	};

	if (equipamento == 2) {															//Cria sorteio para armadura
		var sortArmad = Math.floor(Math.random() * 100);
		var armadura = ["Acolchoada","Corselete de Couro","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Corselete de Couro Batido","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Camisão de Cota de Malha","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Gibão de Peles","Brunea","Cota de Malha","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Peitoral de Aço","Cota de Talas","Loriga Segmentada","Meia Armadura","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha","Armadura de Batalha"];
		var valorArmad = [155,160,175,175,175,175,175,175,175,175,175,175,175,175,175,175,175,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,165,165,165,165,165,165,165,165,165,165,200,300,350,350,350,350,350,350,350,350,350,350,350,350,350,350,400,750,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650];
		preco += valorArmad[sortArmad];


		if (multHab.length>0) {
			var habilArmad = new Array();
			var valorHabilArmad = new Array();
			
			if (cat == 1) {
				habilArmad = ["Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Fortificação Leve","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Escorregadia","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Sombria","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Silenciosa","Resistência à Magia (13)","Resistência à Magia (13)","Resistência à Magia (13)","Resistência à Magia (13)","Escorregadia Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada"];
				valorHabilArmad = [2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,2700,1,1,1,1,1,1,1,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,3750,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15000,15000,15000,15000,15000,15000,15000,15000];
			};

			if (cat == 2) {
				habilArmad = ["Camuflagem","Camuflagem","Camuflagem","Camuflagem","Camuflagem","Fortificação Leve","Fortificação Leve","Fortificação Leve","Escorregadia","Escorregadia","Escorregadia","Sombria","Sombria","Sombria","Silenciosa","Silenciosa","Silenciosa","Resistência à Magia (13)","Resistência à Magia (13)","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência Sônico","Resistência Sônico","Resistência Sônico","Resistência Sônico","Resistência Sônico","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Invulnerabilidade","Invulnerabilidade","Invulnerabilidade","Invulnerabilidade","Invulnerabilidade","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Resistência à Magia (15)","Resistência à Magia (15)","Resistência à Magia (15)","Resistência à Magia (15)","Resistência à Magia (15)","Selvagem","Selvagem","Selvagem","Selvagem","Selvagem","Selvagem"];
				valorHabilArmad = [2700,2700,2700,2700,2700,1,1,1,3750,3750,3750,3750,3750,3750,2,2,2,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,15000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
			};

			if (cat == 3) {
				habilArmad = ["Camuflagem","Camuflagem","Camuflagem","Fortificação Leve","Escorregadia Aprimorada","Escorregadia Aprimorada","Escorregadia Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Sombria Aprimorada","Silenciosa Apromorada","Silenciosa Apromorada","Silenciosa Apromorada","Resistência a Ácido","Resistência a Ácido","Resistência a Ácido","Resistência ao Frio","Resistência ao Frio","Resistência ao Frio","Resistência à Eletricidade","Resistência à Eletricidade","Resistência à Eletricidade","Resistência ao Fogo","Resistência ao Fogo","Resistência ao Fogo","Resistência Sônico","Resistência Sônico","Resistência Sônico","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Invulnerabilidade","Invulnerabilidade","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Fortificação Moderada","Resistência à Magia (15)","Resistência à Magia (15)","Selvagem","Escorregadia Maior","Escorregadia Maior","Escorregadia Maior","Escorregadia Maior","Escorregadia Maior","Sombria Maior","Sombria Maior","Sombria Maior","Sombria Maior","Sombria Maior","Silenciosa Maior","Silenciosa Maior","Silenciosa Maior","Silenciosa Maior","Silenciosa Maior","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência a Ácido Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência ao Frio Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência à Eletricidade Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência ao Fogo Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência Sônico Aprimorada","Resistência à Magia (17)","Resistência à Magia (17)","Resistência à Magia (17)","Resistência à Magia (17)","Resistência à Magia (17)","Forma Etérea","Controlar Mortos-Vivos","Fortificação Pesada","Fortificação Pesada","Resistência à Magia (19)","Resistência à Magia (19)","Resistência a Ácido Maior","Resistência ao Frio Maior","Resistência à Eletricidade Maior","Resistência ao Fogo Maior","Resistência Sônico Maior","Resistência Sônico Maior"];
				valorHabilArmad = [2700,2700,2700,1,15000,15000,15000,15000,15000,15000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,33750,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,42000,4,4,4,4,4,49000,49000,5,5,5,5,66000,66000,66000,66000,66000,66000];
			};

			for (var i = 0; i < multHab.length; i++) {
				multHab.push(habilArmad[multHab[0]]);
				if (valorHabilArmad[multHab[0]] < 10) {
					precoBase += valorHabilArmad[multHab[0]];
				} else {
					preco += valorHabilArmad[multHab[0]];
				};
              	multHab.shift();
			};
		};

		preco += calcularPrecoDef(precoBase);

		return "Armadura: " + armadura[sortArmad] + " " + bonus + " " + multHab.toString() + " com o valor: " + preco + " PO.";
	};

	if (sorteioEscEsp>0) {
		var escudEsp = new Array();
		var valorEscudEsp = new Array();

		if (cat == 1) {
			escudEsp = ["Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador"];
			valorEscudEsp = [205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,3153,3153,3153,3153,3153];
		};

		if (cat == 2) {
			escudEsp = ["Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Broquel de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo de Madeira Negra","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo Grande de Mitral","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo Alado","Escudo Alado","Escudo Alado","Escudo Alado","Escudo Alado"];
			valorEscudEsp = [205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,1020,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,5580,5580,5580,5580,5580,9170,9170,9170,9170,9170,17257,17257,17257,17257,17257];
		};

		if (cat == 3) {
			escudEsp = ["Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo do Conjurador","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo Espinhoso","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo do Leão","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente","Escudo Absorvente"];
			valorEscudEsp = [3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,3153,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,5580,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,9170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170,50170];
		};

		return "Escudo: " + escudEsp[sorteioEscEsp] + " com o valor: " + valorEscudEsp[sorteioEscEsp] + " PO.";
	};

	if (sorteioArmdEsp>0) {
		var armadEsp = new Array();
		var valorArmadEsp = new Array();

		if (cat == 1) {
			armadEsp = ["Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica"];
			valorArmadEsp = [1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150];
		};

		if (cat == 2) {
			armadEsp = ["Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Camisão de Mitral","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Armadura de Couro de Dragão","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Cota de Malha Élfica","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Couro de Rinoceronte","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte"];
			valorArmadEsp = [1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,1100,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,3300,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,4150,5165,5165,5165,5165,5165,5165,5165,5165,5165,5165,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,18900,18900,18900];
		};

		if (cat == 3 ) {
			armadEsp = ["Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Peitoral de Adamante","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Armadura dos Anões","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Loriga Segmentada da Sorte","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura Celesital","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Armadura das Profundezas","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Peitoral do Comando","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura de Mitral da Velocidade","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca","Armadura Demoníaca"];
			valorArmadEsp = [10200,10200,10200,10200,10200,10200,10200,10200,10200,10200,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,18900,18900,18900,18900,18900,18900,18900,18900,18900,18900,18900,18900,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,22400,24650,24650,24650,24650,24650,24650,24650,24650,24650,24650,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,25400,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,26500,52260,52260,52260,52260,52260,52260,52260,52260,52260,52260];
		};

		return "Escudo: " + armadEsp[sorteioArmdEsp] + " com o valor: " + valorArmadEsp[sorteioArmdEsp] + " PO.";

	};
};

function SorteioArma(cat) {																//função para sorteio de arma menor

	/*declaração das variaveis que serão usadas*/
	var controle = false
	var arma = ""																														//vai receber arma.
	var precoBase = 0;
	var preco=0;
	var multHab = new Array();
	var hab = new Array();

	/*Primeira tabela de sorteio de arma*/
	/*Inciar o processo de sorteio*/
	switch(cat) {
		case 1:
			do {
				var sortBonus = Math.floor(Math.random()*100+1); 										//sorteio para bonus
				if (sortBonus<91) {
					if (sortBonus<86) {
						if (sortBonus<71) {
							var bonus = "+1";
							precoBase +=1
							controle = false;
						} else {
							var bonus = "+2";
							precoBase +=2
							controle = false;
						}
					} else {
						var sortArmaEsp = Math.floor(Math.random() * 100);
						controle = false;
					}
				} else {
						do{
							var sortHab = Math.floor(Math.random() * 100);
							var mult = false;
							if (sortHab == 99) {
								sortHab = Math.floor(Math.random() * 100);
								mult = true;
								multHab.push(sortHab);
							};
						} while (mult);
					multHab.push(sortHab);
					controle = true;
				};
			} while (controle);
			break;
		case 2:
			do {
				var sortBonus = Math.floor(Math.random()*100+1); 										//sorteio para bonus
				if (sortBonus<69) {
					if (sortBonus<63) {
						if (sortBonus<59) {
							if (sortBonus<30) {
								if (sortBonus<11) {
									var bonus = "+1";
									precoBase +=1
									controle = false;
								} else {
									var bonus = "+2";
									precoBase +=2
									controle = false;
								}
							} else {
								var bonus = "+3";
								precoBase +=3
								controle = false;
							}
						} else {
							var bonus = "+4";
							precoBase +=4
							controle = false;
						}
					} else {
						var sortArmaEsp = Math.floor(Math.random() * 100);
						controle = false;
					}
				} else {
						do{
							var sortHab = Math.floor(Math.random() * 100);
							var mult = false;
							if (sortHab == 95) {
								sortHab = Math.floor(Math.random() * 100);
								mult = true;
								multHab.push(sortHab);
							};
						} while (mult);
					multHab.push(sortHab);
					controle = true;
				};
			} while (controle);
			break;
		case 3:
			do {
				var sortBonus = Math.floor(Math.random()*100+1); 										//sorteio para bonus
				if (sortBonus<64) {
					if (sortBonus<50) {
						if (sortBonus<39) {
							if (sortBonus<21) {
								var bonus = "+3";
								precoBase +=3
								controle = false;								
							} else {
								var bonus = "+4";
								precoBase +=4
								controle = false;								
							}
						} else {
							var bonus = "+5";
							precoBase +=5
							controle = false;
						}
					} else {
						var sortArmaEsp = Math.floor(Math.random() * 100);
						controle = false;
					}
				} else {
						do{
							var sortHab = Math.floor(Math.random() * 100);
							var mult = false;
							if (sortHab == 90) {
								sortHab = Math.floor(Math.random() * 100);
								mult = true;
								multHab.push(sortHab);
							};
						} while (mult);
					multHab.push(sortHab);
					controle = true;
				};
			} while (controle);
			break;
		};

	/*Fim do primeiro sorteio, tabela*/

	/*Sorteio de Habilidade*/
	
	if (multHab.length>0) {
		switch(cat) {
			case 1:
				hab = ["Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Defensor","Defensor","Defensor","Defensor","Defensor","Defensor","Defensor","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Foco em Chi","Foco em Chi","Foco em Chi","Foco em Chi","Misericórdia","Misericórdia","Misericórdia","Misericórdia","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Arremesso","Arremesso","Arremesso","Arremesso","Trovejante","Trovejante","Trovejante","Trovejante","Dissonante","Dissonante","Dissonante","Dissonante"];
				modPrecoHab = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
				break;
			case 2:
				hab = ["Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Antí-Criatura","Defensor","Defensor","Defensor","Defensor","Defensor","Defensor","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Flamejante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Congelante","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Elétrica","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Toque Espectral","Afiada","Afiada","Afiada","Afiada","Afiada","Afiada","Foco em Chi","Foco em Chi","Foco em Chi","Foco em Chi","Misericórdia","Misericórdia","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Trespassar Poderoso","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Arremesso","Arremesso","Arremesso","Arremesso","Trovejante","Trovejante","Dissonante","Dissonante","Dissonante","Dissonante","Anárquico","Anárquico","Anárquico","Axiomático","Axiomático","Axiomático","Rompimento","Rompimento","Rompimento","Explosão Flamejante","Explosão Flamejante","Explosão Flamejante","Explosão Congelante","Explosão Congelante","Explosão Congelante","Sagrada","Sagrada","Sagrada","Explosão Elétrica","Explosão Elétrica","Explosão Elétrica","Profana","Profana","Profana","Sangramento","Sangramento","Sangramento","Sangramento","Sangramento","Sangramento","Sangramento"];
				modPrecoHab = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
				break;
			case 3:
				hab = ["Antí-Criatura","Antí-Criatura","Antí-Criatura","Flamejante","Flamejante","Flamejante","Congelante","Congelante","Congelante","Elétrica","Elétrica","Elétrica","Toque Espectral","Toque Espectral","Toque Espectral","Foco em Chi","Foco em Chi","Foco em Chi","Foco em Chi","Trespassar Poderoso","Trespassar Poderoso","Armazenar Magias","Armazenar Magias","Armazenar Magias","Arremesso","Arremesso","Arremesso","Arremesso","Trovejante","Trovejante","Trovejante","Trovejante","Dissonante","Dissonante","Dissonante","Dissonante","Anárquico","Anárquico","Anárquico","Anárquico","Anárquico","Axiomático","Axiomático","Axiomático","Axiomático","Axiomático","Rompimento","Rompimento","Rompimento","Explosão Flamejante","Explosão Flamejante","Explosão Flamejante","Explosão Flamejante","Explosão Flamejante","Explosão Congelante","Explosão Congelante","Explosão Congelante","Explosão Congelante","Explosão Congelante","Sagrada","Sagrada","Sagrada","Sagrada","Sagrada","Explosão Elétrica","Explosão Elétrica","Explosão Elétrica","Explosão Elétrica","Explosão Elétrica","Profana","Profana","Profana","Profana","Profana","Sangramento","Sangramento","Sangramento","Sangramento","Velocidade","Velocidade","Velocidade","Velocidade","Velocidade","Energia Brilhante","Energia Brilhante","Energia Brilhante","Dançarino","Dançarino","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal","Vorpal"];
				modPrecoHab = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5];
				break;
		};
		var antiCriat = ["Aberrações","Aberrações","Aberrações","Aberrações","Aberrações","Animais","Animais","Animais","Animais","Construtos","Construtos","Construtos","Construtos","Construtos","Construtos","Construtos","Dragões","Dragões","Dragões","Dragões","Dragões","Dragões","Elementais","Elementais","Elementais","Elementais","Elementais","Fadas","Fadas","Fadas","Fadas","Fadas","Gigantes","Gigantes","Gigantes","Gigantes","Gigantes","Gigantes","Gigantes","Humanóides aquáticos","Humanóides, anões","Humanóides, anões","Humanóides, elfos","Humanóides, elfos","Humanóides, gnoll","Humanóides, gnomos","Humanóides, goblinóides","Humanóides, goblinóides","Humanóides, goblinóides","Humanóides, halflings","Humanóides, humanos","Humanóides, humanos","Humanóides, humanos","Humanóides, humanos","Humanóides, répteis","Humanóides, répteis","Humanóides, répteis","Humanóides, orcs","Humanóides, orcs","Humanóides, orcs","Bestas Mágicas","Bestas Mágicas","Bestas Mágicas","Bestas Mágicas","Bestas Mágicas","Humanóides monstruosos","Humanóides monstruosos","Humanóides monstruosos","Humanóides monstruosos","Humanóides monstruosos","Limos","Limos","Planares do Ar","Planares Caóticos","Planares Caóticos","Planares Caóticos","Planares da Terra","Planares Maus","Planares Maus","Planares Maus","Planares do Fogo","Planares bons","Planares bons","Planares bons","Planares Leais","Planares Leais","Planares Leais","Planares da Água","Plantas","Plantas","Mortos Vivos","Mortos Vivos","Mortos Vivos","Mortos Vivos","Mortos Vivos","Mortos Vivos","Mortos Vivos","Mortos Vivos","Insetos","Insetos"];
		for (var i = 0; i < multHab.length; i++) {
			if (multHab[0]>10) {
				multHab.push(hab[multHab[0]]);
				multHab.shift();
			} else {
				var sortAntiCriatID = Math.floor(Math.random() * 100);
				multHab.push(hab[multHab[0]] + antiCriat[sortAntiCriatID]);
				multHab.shift();
			};
		precoBase += modPrecoHab[multHab[0]];
		};
	};

	/*Calcular o preço a ser adiocionado a arma*/

	switch (precoBase) {
		case 1:
			preco+=2000;
			break;
		case 2:
			preco+=8000;
			break;
		case 3:
			preco+=18000;
			break;
		case 4:
			preco+=32000;
			break;
		case 5:
			preco+=50000;
			break;
		case 6:
			preco+=72000;
			break;
		case 7:
			preco+=98000;
			break;
		case 8:
			preco+=128000;
			break;
		case 9:
			preco+=162000;
			break;
		case 10:
			preco+=200000;
			break;		
	};

	/*Fim do calculo do preço base*/

	/*Inicio do sorteio do tipo de arma*/
	/*tipo de arma: 
		1-corpo a corpo; 
		2-incomum; 
		3-distância
	*/
 
	if (sortArmaEsp == undefined) {var sorteioTipo = Math.floor(Math.random() * 100 + 1);};											//sorteio para o tipo	
	if (sorteioTipo<81) {
		if (sorteioTipo<71) {
			var tipo = 1;
		} else {
			var tipo = 2;
		}
	} else {
		var tipo = 3;
	};

	/*Fim do Sorteio do tipo de arma*/
	//caso no sorteio sai arma Específica o programa irá executar esse pedaço
	/*Inicio do sorteio da arma Específica*/

	if (sortArmaEsp !== undefined) {
		var armaEsp = new Array();
		var valorArmEsp= new Array();
		switch(cat) {
			case 1:
				armaEsp = ["Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Flecha do Sono","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Virote Gritante","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Adaga de Prata (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Espada Longa de Ferro Frio (Obra-Prima)","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Flecha Assassina","Flecha Assassina","Flecha Assassina","Flecha Assassina","Flecha Assassina","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante"];
				valorArmEsp = [132,132,132,132,132,132,132,132,132,132,132,132,132,132,132,267,267,267,267,267,267,267,267,267,267,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,2282,2282,2282,2282,2282,3002,3002,3002,3002,3002,3002,3002,3002,3002,3002,3010,3010,3010,3010,3010,3010,3010,3010,3010,3010,];
				break;
			case 2:
				armaEsp = ["Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Azagaia dos Relâmpagos","Flecha Assassina","Flecha Assassina","Flecha Assassina","Flecha Assassina","Flecha Assassina","Flecha Assassina","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Adaga de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Machado de Combate de Adamante","Flecha da Morte (Maior)","Flecha da Morte (Maior)","Flecha da Morte (Maior)","Flecha da Morte (Maior)","Estilhaçadora","Estilhaçadora","Estilhaçadora","Adaga Venenosa","Adaga Venenosa","Adaga Venenosa","Adaga Venenosa","Adaga Venenosa","Adaga Venenosa","Tridente de Alerta","Tridente de Alerta","Tridente de Alerta","Tridente de Alerta","Tridente de Alerta","Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Ruína dos Metamorfos","Ruína dos Metamorfos","Ruína dos Metamorfos","Ruína dos Metamorfos","Ruína dos Metamorfos","Tridende de Comandar Peixes","Tridende de Comandar Peixes","Tridende de Comandar Peixes","Tridende de Comandar Peixes","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Arco do Juramento","Arco do Juramento"];
				valorArmEsp = [1500,1500,1500,1500,1500,1500,1500,1500,1500,2282,2282,2282,2282,2282,2282,3002,3002,3002,3002,3002,3002,3002,3002,3002,3010,3010,3010,3010,3010,3010,3010,3010,3010,4057,4057,4057,4057,4315,4315,4315,8302,8302,8302,8302,8302,8302,10115,10115,10115,10115,10115,10302,10302,10302,10302,10302,10302,12780,12780,12780,12780,12780,18650,18650,18650,18650,20715,20715,20715,20715,20715,20715,20715,20715,22060,22060,22060,22060,22060,22310,22310,22310,22310,22310,22310,22310,22315,22315,22315,22315,22315,23057,23057,23057,23057,25715,25715,25715,25600,25600];
				break;
			case 3:
				armaEsp = ["Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Adaga do Assassino","Ruína dos Metamorfos","Ruína dos Metamorfos","Ruína dos Metamorfos","Tridende de Comandar Peixes","Tridende de Comandar Peixes","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lígua Flamejante","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Lâmina da Sorte (0 Desejos)","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada da Sutileza","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Espada dos Planos","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Ladra das Noves Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Espada de Furto de Vidas","Arco do Juramento","Arco do Juramento","Arco do Juramento","Arco do Juramento","Maça do Terror","Maça do Terror","Maça do Terror","Maça do Terror","Maça do Terror","Sorvedouro de Vidas","Sorvedouro de Vidas","Sorvedouro de Vidas","Sorvedouro de Vidas","Sorvedouro de Vidas","Sorvedouro de Vidas","Cimitarra Silvetre","Cimitarra Silvetre","Cimitarra Silvetre","Cimitarra Silvetre","Cimitarra Silvetre","Sabre da Perfuração","Sabre da Perfuração","Sabre da Perfuração","Sabre da Perfuração","Sabre da Perfuração","Lâmina do Sol","Lâmina do Sol","Lâmina do Sol","Lâmina do Sol","Lâmina do Sol","Lâmina do Sol","Estigma do Gelo","Estigma do Gelo","Estigma do Gelo","Estigma do Gelo","Estigma do Gelo","Estigma do Gelo","Martelo de Arremesso Anão","Martelo de Arremesso Anão","Martelo de Arremesso Anão","Martelo de Arremesso Anão","Martelo de Arremesso Anão","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Lâmina da Sorte (1 Desejos)","Maça da Destruição","Maça da Destruição","Maça da Destruição","Maça da Destruição","Lâmina da Sorte (2 Desejos)","Lâmina da Sorte (2 Desejos)","Vingadora Sagrada","Vingadora Sagrada","Lâmina da Sorte (3 Desejos)"];
				valorArmEsp = [10302,10302,10302,10302,12780,12780,12780,18650,18650,20715,20715,20715,20715,22060,22060,22060,22060,22310,22310,22310,22310,22310,22310,22310,22315,22315,22315,22315,22315,22315,22315,23057,23057,23057,23057,23057,23057,25715,25715,25715,25715,25715,25600,25600,25600,25600,38552,38552,38552,38552,38552,40320,40320,40320,40320,40320,40320,47315,47315,47315,47315,47315,50320,50320,50320,50320,50320,50335,50335,50335,50335,50335,50335,54475,54475,54475,54475,54475,54475,60312,60312,60312,60312,60312,62360,62360,62360,62360,62360,62360,62360,75312,75312,75312,75312,102660,102660,120630,120630,142960];
				break;
		};
		
		return	"Arma: " + armaEsp[sortArmaEsp] + ", valor: " + valorArmEsp[sortArmaEsp] + " PO.";
	};


	/*Fim do sorteio da arma Específica*/

	/*Sorteio de arma por tipo*/
	/*Primeiro ele vai criar os arrays de arma e valor de arcordo com tipo sorteado*/
	if (tipo == 1) {
		var armaMelee = ["Adaga","Adaga","Adaga","Adaga","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga","Espada Larga","Espada Larga","Machado Grande","Machado Grande","Machado Grande","Espada Larga","Espada Larga"];
		var valorArmaMelee = [302,302,302,302,320,320,320,320,320,320,320,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,350,350,320,320,320,350,350,];
		var sortMelee = Math.floor(Math.random() * 100);										//sorteio para arma corpo a corpo
		preco += valorArmaMelee[sortMelee]
		
		return "Arma: " + armaMelee[sortMelee] + " " + multHab.toString() + ", valor: " + preco + " PO.";
	};

	if (tipo == 2) {
		var armaInc = ["Machado Orc Duplo","Machado Orc Duplo","Machado Orc Duplo","Machado de Combate","Machado de Combate","Machado de Combate","Machado de Combate","Corrente com Cravos","Corrente com Cravos","Corrente com Cravos","Clava","Clava","Besta de Mão","Besta de Mão","Besta de Mão","Besta de Mão","Besta de Repetição","Besta de Repetição","Besta de Repetição","Adaga de Soco","Adaga de Soco","Falcione","Falcione","Mangual Atroz","Mangual Atroz","Mangual Atroz","Mangual Pesado","Mangual Pesado","Mangual Pesado","Mangual Pesado","Mangual Pesado","Mangual Leve","Mangual Leve","Mangual Leve","Mangual Leve","Manopla","Manopla","Manopla com Cravos","Manopla com Cravos","Glaive","Glaive","Clava Grande","Clava Grande","Guisarme","Guisarme","Alabarda","Alabarda","Alabarda","Meia Lança","Meia Lança","Meia Lança","Martelo de Gnomo com Gancho","Martelo de Gnomo com Gancho","Martelo de Gnomo com Gancho","Martelo Leve","Martelo Leve","Machadinha","Machadinha","Kukri","Kukri","Kukri","Lança Montada","Lança Montada","Lança Montada","Lança Longa","Lança Longa","Lança Longa","Maça Estrela","Maça Estrela","Maça Estrela","Rede","Rede","Picareta Pesada","Picareta Pesada","Picareta Leve","Picareta Leve","Ranseur","Ranseur","Porrete","Porrete","Foice Longa","Foice Longa","Shuriken","Shuriken","Foice Curta","Foice Curta","Espada de Duas Lâminas","Espada de Duas Lâminas","Espada de Duas Lâminas","Tridente","Tridente","Urgrosh Anão","Urgrosh Anão","Urgrosh Anão","Martelo de Guerra","Martelo de Guerra","Martelo de Guerra","Chicote","Chicote","Chicote"];
		var valorArmaInc = [660,660,660,310,310,310,310,325,325,325,300,300,400,400,400,400,550,550,550,302,302,375,375,690,690,690,315,315,315,315,315,308,308,308,308,302,302,305,305,308,308,305,305,309,309,310,310,310,301,301,301,320,320,320,301,301,306,306,308,308,308,310,310,310,305,305,305,308,308,308,320,320,308,308,304,304,310,310,301,301,318,318,301,301,306,306,700,700,700,315,315,650,650,650,312,312,312,301,301,301,];
		var sortInco = Math.floor(Math.random() * 100);											//sorteio para arma incomum
		preco += valorArmaInc[sortInco]
		
		return "Arma: " + armaInc[sortInco] + " " + multHab.toString() + ", valor: " + preco + " PO.";
	};

	if (tipo == 3) {
		var armaRange = ["Flechas (50)","Flechas (50)","Flechas (50)","Flechas (50)","Flechas (50)","Virotes de Besta (50)","Virotes de Besta (50)","Virotes de Besta (50)","Balas de Funda (50)","Balas de Funda (50)","Machado de Arremesso","Machado de Arremesso","Machado de Arremesso","Machado de Arremesso","Machado de Arremesso","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Pesada","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Besta Leve","Dardo","Dardo","Dardo","Dardo","Azagaia","Azagaia","Arco Curto","Arco Curto","Arco Curto","Arco Curto","Arco Curto","Arco Curto Composto (bônus de For +0)","Arco Curto Composto (bônus de For +0)","Arco Curto Composto (bônus de For +0)","Arco Curto Composto (bônus de For +0)","Arco Curto Composto (bônus de For +0)","Arco Curto Composto (bônus de For +1)","Arco Curto Composto (bônus de For +1)","Arco Curto Composto (bônus de For +1)","Arco Curto Composto (bônus de For +1)","Arco Curto Composto (bônus de For +1)","Arco Curto Composto (bônus de For +2)","Arco Curto Composto (bônus de For +2)","Arco Curto Composto (bônus de For +2)","Arco Curto Composto (bônus de For +2)","Arco Curto Composto (bônus de For +2)","Funda","Funda","Funda","Funda","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo","Arco Longo Composto","Arco Longo Composto","Arco Longo Composto","Arco Longo Composto","Arco Longo Composto","Arco Longo Composto (bônus de For +1)","Arco Longo Composto (bônus de For +1)","Arco Longo Composto (bônus de For +1)","Arco Longo Composto (bônus de For +1)","Arco Longo Composto (bônus de For +1)","Arco Longo Composto (bônus de For +2)","Arco Longo Composto (bônus de For +2)","Arco Longo Composto (bônus de For +2)","Arco Longo Composto (bônus de For +2)","Arco Longo Composto (bônus de For +2)","Arco Longo Composto (bônus de For +3)","Arco Longo Composto (bônus de For +3)","Arco Longo Composto (bônus de For +3)","Arco Longo Composto (bônus de For +3)","Arco Longo Composto (bônus de For +3)","Arco Longo Composto (bônus de For +4)","Arco Longo Composto (bônus de For +4)","Arco Longo Composto (bônus de For +4)","Arco Longo Composto (bônus de For +4)","Arco Longo Composto (bônus de For +4)"];
		var valorArmaRange = [350,350,350,350,350,350,350,350,350,350,308,308,308,308,308,350,350,350,350,350,350,350,350,350,350,335,335,335,335,335,335,335,335,335,335,300,300,300,300,301,301,330,330,330,330,330,375,375,375,375,375,450,450,450,450,450,525,525,525,525,525,300,300,300,300,375,375,375,375,375,375,375,375,375,375,400,400,400,400,400,500,500,500,500,500,600,600,600,600,600,700,700,700,700,700,800,800,800,800,800,];
		var sortRange = Math.floor(Math.random() * 100);										//sorteio para arma a distância
		preco += valorArmaRange[sortRange]
		
		return "Arma: " + armaRange[sortRange] + " " + multHab.toString() + ", valor: " + preco + " PO.";
	};
};

function sorteioPocao(cat) {															//função para sorteio de poção
	var id = Math.floor(Math.random() * 100);
	var pocao = new Array();
	var tipo = new Array();
	var valorItem = new Array();

	if (cat == 1) {
		pocao = ["Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Curar Ferimentos leves","Suportar Elementos","Suportar Elementos","Suportar Elementos","Esconder-se de Animais","Esconder-se de Animais","Esconder-se de Mortos-Vivos","Esconder-se de Mortos-Vivos","Salto","Salto","Armadura Arcana","Armadura Arcana","Armadura Arcana","Presa Mágica","Presa Mágica","Presa Mágica","Pedra Encantada","Arma Mágica","Arma Mágica","Arma Mágica","Passos sem Pegadas","Proteção contra (Tendência)","Proteção contra (Tendência)","Remover Medo","Remover Medo","Santuário","Escudo da Fé +2","Escudo da Fé +2","Escudo da Fé +2","Arma Abençoada","Abençoar Arma","Abençoar Arma","Aumetar Pessoa","Aumetar Pessoa","Aumetar Pessoa","Reduzir Pessoa","Ajuda","Ajuda","Pele de Árvore +2","Pele de Árvore +2","Pele de Árvore +2","Vigor dou Urso","Vigor dou Urso","Vigor dou Urso","Nublar","Nublar","Nublar","Força do Touro","Força do Touro","Força do Touro","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Escuridão","Visão no Escuro","Visão no Escuro","Visão no Escuro","Retardar Envenenamento","Retardar Envenenamento","Retardar Envenenamento","Esplendor da Águia","Esplendor da Águia","Astúcia da Raposa","Astúcia da Raposa","Invisibilidade","Invisibilidade","Invisibilidade","Restauração Menor","Restauração Menor","Restauração Menor","Levitação","Levitação","Confundir Detecção","Sabedoria da Coruja","Sabedoria da Coruja","Proteção contra Flechas 10/Mágica","Proteção contra Flechas 10/Mágica","Remover Paralisia","Remover Paralisia","Resistência a Elementos (Tipo) 10","Resistência a Elementos (Tipo) 10","Resistência a Elementos (Tipo) 10","Escudo da Fé +3","Patas de Aranha","Patas de Aranha","Dissimular Tendência"];
		tipo = ["Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção ou Óleo","Poção ou Óleo","Poção ou Óleo","Poção","Poção","Poção","Poção ou Óleo","Poção ou Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção"];
		valorItem = [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,100,100,250,250,250,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,];
	};

	if (cat == 2) {
		pocao = ["Abençoar Arma","Abençoar Arma","Aumetar Pessoa","Aumetar Pessoa","Reduzir Pessoa","Ajuda","Pele de Árvore +2","Vigor dou Urso","Vigor dou Urso","Vigor dou Urso","Nublar","Nublar","Nublar","Força do Touro","Força do Touro","Força do Touro","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Escuridão","Visão no Escuro","Visão no Escuro","Retardar Envenenamento","Esplendor da Águia","Esplendor da Águia","Astúcia da Raposa","Astúcia da Raposa","Invisibilidade","Invisibilidade","Restauração Menor","Levitação","Confundir Detecção","Sabedoria da Coruja","Sabedoria da Coruja","Proteção contra Flechas 10/Mágica","Remover Paralisia","Resistência a Elementos (Tipo) 10","Resistência a Elementos (Tipo) 10","Escudo da Fé +3","Escudo da Fé +3","Patas de Aranha","Dissimular Tendência","Pele de Árvore +3","Escudo da Fé +4","Resistência a Elementos (Tipo) 20","Resistência a Elementos (Tipo) 20","Resistência a Elementos (Tipo) 20","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Luz do Dia","Deslocamento","Deslocamento","Deslocamento","Flechas de Chamas","Vôo","Vôo","Vôo","Forma Gasosa","Presa Mágica Maior +1","Presa Mágica Maior +1","Presa Mágica Maior +1","Presa Mágica Maior +1","Velocidade","Velocidade","Heroísmo","Heroísmo","Heroísmo","Lâmina Afiada","Lâmina Afiada","Circulo Mágico Contra (tendência)","Roupa Encantada +1","Roupa Encantada +1","Neutralizar Venenos","Neutralizar Venenos","Neutralizar Venenos","Dificultar Detecção","Dificultar Detecção","Proteção Contra Elementos","Proteção Contra Elementos","Proteção Contra Elementos","Fúria","Fúria","Remover Cegueira/Surdez","Remover Maldição","Remover Doença","Idiomas","Respirar na Água","Respirar na Água","Caminhar na Água"];
		tipo = ["Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção ou Óleo","Poção ou Óleo","Poção","Poção ou Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção"];
		valorItem = [100,100,250,250,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,600,600,700,700,700,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750];
	};

	if (cat == 3) {
		pocao = ["Nublar","Nublar","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Visão no Escuro","Visão no Escuro","Invisibilidade","Invisibilidade","Restauração Menor","Remover Paralisia","Escudo da Fé +3","Dissimular Tendência","Pele de Árvore +3","Escudo da Fé +4","Escudo da Fé +4","Resistência a Elementos (Tipo) 20","Resistência a Elementos (Tipo) 20","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Luz do Dia","Deslocamento","Deslocamento","Deslocamento","Flechas de Chamas","Vôo","Vôo","Vôo","Vôo","Vôo","Forma Gasosa","Velocidade","Velocidade","Heroísmo","Heroísmo","Heroísmo","Lâmina Afiada","Roupa Encantada +1","Roupa Encantada +1","Neutralizar Venenos","Neutralizar Venenos","Neutralizar Venenos","Dificultar Detecção","Dificultar Detecção","Proteção Contra Elementos","Proteção Contra Elementos","Fúria","Remover Cegueira/Surdez","Remover Maldição","Remover Doença","Idiomas","Respirar na Água","Caminhar na Água","Pele de Árvore +4","Pele de Árvore +4","Escudo da Fé +5","Boa Esperança","Resistência a Elementos (tipo) 30","Resistência a Elementos (tipo) 30","Resistência a Elementos (tipo) 30","Pele de Árvore +5","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Presa Mágica Maior +2","Roupa Encantada +2","Roupa Encantada +2","Roupa Encantada +2","Roupa Encantada +2","Proteção contra Flechas 15/Mágica","Presa Mágica Maior +3","Presa Mágica Maior +3","Presa Mágica Maior +3","Presa Mágica Maior +3","Presa Mágica Maior +3","Presa Mágica Maior +3","Roupa Encantada +3","Roupa Encantada +3","Roupa Encantada +3","Presa Mágica Maior +4","Presa Mágica Maior +4","Presa Mágica Maior +4","Presa Mágica Maior +4","Roupa Encantada +4","Roupa Encantada +4","Presa Mágica Maior +5","Presa Mágica Maior +5","Roupa Encantada +5"];
		tipo = ["Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção ou Óleo","Poção ou Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Óleo","Óleo","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Óleo","Óleo","Óleo","Óleo","Óleo","Óleo","Poção","Poção","Poção","Poção","Óleo","Óleo","Poção","Óleo","Óleo"];
		valorItem = [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,600,600,600,700,700,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,900,900,900,1050,1100,1100,1100,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1500,1800,1800,1800,1800,1800,1800,1800,1800,1800,2400,2400,2400,2400,2400,2400,3000,3000,3000];
	};
	
	return tipo[id] + ": " + pocao[id] + ", valor: " + valorItem[id] + " PO.";
};

function sorteioAneis(cat) {															//função para sorteio de anel
	var id = Math.floor(Math.random() * 100);
	var aneis = new Array();
	var valorItem = new Array();

	if (cat == 1) {
		aneis = ["Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Proteção +1","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Queda Suave","Sustento","Sustento","Sustento","Sustento","Sustento","Sustento","Sustento","Sustento","Escalada","Escalada","Escalada","Escalada","Escalada","Escalada","Escalada","Escalada","Salto","Salto","Salto","Salto","Salto","Salto","Salto","Salto","Natação","Natação","Natação","Natação","Natação","Natação","Natação","Natação","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Escudo Mental","Escudo Mental","Escudo Mental","Escudo Mental","Escudo Mental","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Escudo de Energia","Escudo de Energia","Escudo de Energia","Escudo de Energia","Escudo de Energia","Aríete","Aríete","Aríete","Aríete","Aríete","Cativar Animais","Cativar Animais","Cativar Animais","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Poder do Camaleão","Poder do Camaleão","Caminar na Água","Caminar na Água"];
		valorItem = [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2200,2200,2200,2200,2200,2200,2200,2200,2200,2200,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8500,8500,8500,8500,8500,8600,8600,8600,8600,8600,10800,10800,10800,12000,12000,12000,12700,12700,15000,15000,];
	};

	if (cat == 2) {
		aneis = ["Contramágica","Contramágica","Contramágica","Contramágica","Contramágica","Escudo Mental","Escudo Mental","Escudo Mental","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Proteção +2","Escudo de Energia","Escudo de Energia","Escudo de Energia","Escudo de Energia","Escudo de Energia","Aríete","Aríete","Aríete","Aríete","Aríete","Escalada Aprimorada","Escalada Aprimorada","Escalada Aprimorada","Escalada Aprimorada","Escalada Aprimorada","Escalada Aprimorada","Salto Aprimorado","Salto Aprimorado","Salto Aprimorado","Salto Aprimorado","Salto Aprimorado","Salto Aprimorado","Natação Aprimorado","Natação Aprimorado","Natação Aprimorado","Natação Aprimorado","Natação Aprimorado","Natação Aprimorado","Cativar Animais","Cativar Animais","Cativar Animais","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Poder do Camaleão","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Caminar na Água","Proteção +3","Proteção +3","Proteção +3","Proteção +3","Proteção +3","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Invisibilidade","Invisibilidade","Invisibilidade","Invisibilidade","Invisibilidade","Arcano (I)","Arcano (I)","Arcano (I)","Arcano (I)","Evasão","Evasão","Evasão","Evasão","Evasão","Visão Contínua","Visão Contínua","Visão Contínua","Movimento Súbito","Movimento Súbito","Movimento Súbito","Movimento Súbito","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)"];
		valorItem = [4000,4000,4000,4000,4000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8500,8500,8500,8500,8500,8600,8600,8600,8600,8600,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10800,10800,10800,12000,12000,12000,12000,12000,12000,12000,12700,15000,15000,15000,15000,15000,15000,15000,15000,15000,18000,18000,18000,18000,18000,18000,18000,18000,18000,18000,20000,20000,20000,20000,20000,20000,20000,20000,20000,25000,25000,25000,25000,25000,25000,25000,25000,27000,27000,27000,27000,28000,28000,28000];
	};

	if (cat == 3) {
		aneis = ["Resistência a Elementos (Menor)","Resistência a Elementos (Menor)","Proteção +3","Proteção +3","Proteção +3","Proteção +3","Proteção +3","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Armazenar Magias (Menor)","Invisibilidade","Invisibilidade","Invisibilidade","Invisibilidade","Invisibilidade","Arcano (I)","Arcano (I)","Arcano (I)","Arcano (I)","Evasão","Evasão","Evasão","Evasão","Evasão","Evasão","Visão Contínua","Visão Contínua","Visão Contínua","Movimento Súbito","Movimento Súbito","Movimento Súbito","Movimento Súbito","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Resistência a Elementos (Maior)","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Proteçaõ +4","Arcano (II)","Arcano (II)","Arcano (II)","Arcano (II)","Arcano (II)","Arcano (II)","Movimento Livre","Movimento Livre","Movimento Livre","Movimento Livre","Movimento Livre","Resistência a Elementos (Superior)","Resistência a Elementos (Superior)","Resistência a Elementos (Superior)","Escudo Aliado (Par)","Escudo Aliado (Par)","Proteção +5","Proteção +5","Proteção +5","Proteção +5","Proteção +5","Estrelas Cadentes","Estrelas Cadentes","Estrelas Cadentes","Estrelas Cadentes","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Armazenar Magias","Arcano (III)","Arcano (III)","Arcano (III)","Arcano (III)","Telecinésia","Telecinésia","Telecinésia","Regeneração","Regeneração","Três Desejos","Refletir Magias","Refletir Magias","Refletir Magias","Arcano (IV)","Arcano (IV)","Convocar Djinn","Comandar Elemental (Fogo)","Comandar Elemental (Fogo)","Comandar Elemental (Fogo)","Comandar Elemental (Água)","Armazenar Magias (Maior)"];
		valorItem = [12000,12000,18000,18000,18000,18000,18000,18000,18000,18000,20000,20000,20000,20000,20000,20000,20000,20000,20000,25000,25000,25000,25000,25000,25000,25000,25000,25000,27000,27000,27000,27000,28000,28000,28000,28000,28000,28000,28000,32000,32000,32000,32000,32000,32000,32000,32000,32000,32000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,44000,44000,44000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,50000,70000,70000,70000,70000,75000,75000,75000,90000,90000,97950,98280,98280,98280,100000,100000,125000,200000,200000,200000,200000,200000];
	};
	
	return "Anel: " + aneis[id] + ", valor: " + valorItem[id] + " PO.";
};

function sorteioBastoes(cat) {															//função para sorteio de bastão
	var id = Math.floor(Math.random() * 100);
	var bastoes = new Array();
	var valorItem = new Array();

	if (cat == 2) {
		bastoes = ["Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Aumentar (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Estender (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Metamágico, Silencioso (menor)","Imóvel","Imóvel","Imóvel","Imóvel","Imóvel","Imóvel","Imóvel","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Metamágico, Potencializar (menor)","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Detecção de Metais e Minerais","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Cancelamento","Metamágico, Aumentar","Metamágico, Aumentar","Metamágico, Aumentar","Metamágico, Aumentar","Metamágico, Estender","Metamágico, Estender","Metamágico, Estender","Metamágico, Estender","Metamágico, Silencioso","Metamágico, Silencioso","Metamágico, Silencioso","Metamágico, Silencioso","Maravilhas","Maravilhas","Maravilhas","Maravilhas","Maravilhas","Maravilhas","Jibóia","Jibóia","Jibóia","Jibóia","Jibóia","Jibóia","Jibóia","Jibóia","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Antifogo","Antifogo","Antifogo","Antifogo","Antifogo","Antifogo","Víbora","Víbora","Víbora","Víbora","Víbora","Víbora","Víbora","Víbora","Metamágico, Potencializar","Metamágico, Potencializar","Metamágico, Acelerar (Menor)"];
		valorItem = [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,5000,5000,5000,5000,5000,5000,5000,9000,9000,9000,9000,9000,9000,9000,10500,10500,10500,10500,10500,10500,10500,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,11000,12000,12000,12000,12000,12000,12000,13000,13000,13000,13000,13000,13000,13000,13000,14000,14000,14000,14000,15000,15000,15000,15000,15000,15000,19000,19000,19000,19000,19000,19000,19000,19000,32500,32500,35000];
	};

	if (cat == 3) {
		bastoes = ["Cancelamento","Cancelamento","Cancelamento","Cancelamento","Metamágico, Aumentar","Metamágico, Aumentar","Metamágico, Estender","Metamágico, Estender","Metamágico, Silencioso","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Metamágico, Maximizar (menor)","Antifogo","Antifogo","Antifogo","Víbora","Víbora","Víbora","Víbora","Detecção de Inimigos","Detecção de Inimigos","Detecção de Inimigos","Detecção de Inimigos","Detecção de Inimigos","Metamágico, Aumentar (Maior)","Metamágico, Aumentar (Maior)","Metamágico, Aumentar (Maior)","Metamágico, Aumentar (Maior)","Metamágico, Aumentar (Maior)","Metamágico, Aumentar (Maior)","Metamágico, Estender (Maior)","Metamágico, Estender (Maior)","Metamágico, Estender (Maior)","Metamágico, Estender (Maior)","Metamágico, Estender (Maior)","Metamágico, Estender (Maior)","Metamágico, Silencioso (Maior)","Metamágico, Silencioso (Maior)","Metamágico, Silencioso (Maior)","Metamágico, Silencioso (Maior)","Metamágico, Silencioso (Maior)","Metamágico, Silencioso (Maior)","Esplendor","Esplendor","Esplendor","Esplendor","Esplendor","Envelhecimento","Envelhecimento","Envelhecimento","Envelhecimento","Envelhecimento","Metamágico, Potencializar","Metamágico, Potencializar","Metamágico, Potencializar","Metamágico, Potencializar","Metamágico, Potencializar","Metamágico, Potencializar","Trovões e Relâmpagos","Trovões e Relâmpagos","Trovões e Relâmpagos","Trovões e Relâmpagos","Trovões e Relâmpagos","Metamágico, Acelerar (Menor)","Metamágico, Acelerar (Menor)","Metamágico, Acelerar (Menor)","Metamágico, Acelerar (Menor)","Negação","Negação","Negação","Negação","Absorção","Absorção","Absorção","Bastão Mangual","Bastão Mangual","Bastão Mangual","Bastão Mangual","Metamágico, Maximizar","Metamágico, Maximizar","Obediência","Obediência","Segurança","Segurança","Grande Poder","Grande Poder","Metamágico, Potencializar (Maior)","Metamágico, Potencializar (Maior)","Metamágico, Acelerar","Metamágico, Acelerar","Prontidão","Prontidão","Metamágico, Maximizar (Maior)","Metamágico, Acelerar (Maior)"];
		valorItem = [11000,11000,11000,11000,11000,11000,11000,11000,11000,14000,14000,14000,14000,14000,14000,14000,14000,14000,15000,15000,15000,19000,19000,19000,19000,23500,23500,23500,23500,23500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,24500,25000,25000,25000,25000,25000,25000,25000,25000,25000,25000,32500,32500,32500,32500,32500,32500,33000,33000,33000,33000,33000,35000,35000,35000,35000,37000,37000,37000,37000,50000,50000,50000,50000,50000,50000,50000,54000,54000,60000,60000,61000,61000,70000,70000,73000,73000,75500,75500,85000,85000,121500,170000];
	};

	return "Bastão: " + bastoes[id] + ", valor: " + valorItem[id] + " PO.";
};

function sorteioPergaminhos(cat) {														//função para sorteio de pergaminhos
	var sorteioTipo = Math.floor(Math.random() * 100 + 1);
	
	if (sorteioTipo<71) {
		var tipo = 1;	//Tipo = Magia Arcana
	} else {
		var tipo = 2;	//Tipo = Magia Divina
	};

	var sorteioNvlMagia = Math.floor(Math.random() * 100 + 1);

	switch (cat) {
		case 1:
			if (sorteioNvlMagia <96) {
				if (sorteioNvlMagia <51) {
					if (sorteioNvlMagia <6) {
						var nvlMagia = 0;
						var nvlConj = 1;
					} else {
						var nvlMagia = 1;
						var nvlConj = 1;
					}
				} else {
					var nvlMagia = 2;
					var nvlConj = 3;
				}
			} else {
				var nvlMagia = 3;
				var nvlConj = 5;
			};
			break;
		case 2:
			if (sorteioNvlMagia<96) {
				if (sorteioNvlMagia<66) {
					if (sorteioNvlMagia<6) {
						var nvlMagia = 2;
						var nvlConj = 3;
					} else {
						var nvlMagia = 3;
						var nvlConj = 5;
					}
				} else {
					var nvlMagia = 4;
					var nvlConj = 7;
				}
			} else {
				var nvlMagia = 5;
				var nvlConj = 9;
			};
			break;
		case 3:
			if (sorteioNvlMagia<96) {
				if (sorteioNvlMagia<86) {
					if (sorteioNvlMagia<71) {
						if (sorteioNvlMagia<51) {
							if (sorteioNvlMagia<6) {
								var nvlMagia = 4;
								var nvlConj = 7;
							} else {
								var nvlMagia = 5;
								var nvlConj = 9;
							}
						} else {
							var nvlMagia = 6;
							var nvlConj = 11;
						}
					} else {
						var nvlMagia = 7;
						var nvlConj = 13;
					}
				} else {
					var nvlMagia = 8;
					var nvlConj = 15;
				}
			} else {
				var nvlMagia = 9;
				var nvlConj = 17;
			};
			break;
	}
	
	if (tipo == 1) {																	//magia arcana
		var magiaArc = new Array();
		var valorMagiaArc = new Array();
		var idMagiaArc = Math.floor(Math.random() * 100 + 1);
		switch (nvlMagia) {
			case 0:
				magiaArc = ["Raio de Ácido","Raio de Ácido","Raio de Ácido","Raio de Ácido","Marca Arcana","Marca Arcana","Marca Arcana","Marca Arcana","Globos de Luz","Globos de Luz","Globos de Luz","Globos de Luz","Globos de Luz","Pasmar","Pasmar","Pasmar","Pasmar","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Venenos","Detectar Venenos","Detectar Venenos","Detectar Venenos","Romper Morto-Vivo","Romper Morto-Vivo","Romper Morto-Vivo","Romper Morto-Vivo","Brilho","Brilho","Brilho","Brilho","Brilho","Som Fantasma","Som Fantasma","Som Fantasma","Som Fantasma","Som Fantasma","Intuir Direção","Intuir Direção","Luz","Luz","Luz","Luz","Luz","Luz","Canção de Ninar","Canção de Ninar","Mãos Mágicas","Mãos Mágicas","Mãos Mágicas","Mãos Mágicas","Mãos Mágicas","Consertar","Consertar","Consertar","Consertar","Consertar","Mensagem","Mensagem","Mensagem","Mensagem","Mensagem","Abrir/Fechar","Abrir/Fechar","Abrir/Fechar","Abrir/Fechar","Abrir/Fechar","Prestidigitação","Prestidigitação","Prestidigitação","Prestidigitação","Prestidigitação","Raio de Gelo","Raio de Gelo","Raio de Gelo","Raio de Gelo","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Resistência","Resistência","Resistência","Resistência","Resistência","Resistência","Resistência","Invocar Instrumento","Invocar Instrumento","Toque da Fadiga","Toque da Fadiga","Toque da Fadiga","Toque da Fadiga"];
				valorMagiaArc = [12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5];
				break;
			case 1:
				magiaArc = ["Alarme","Alarme","Alarme","Animar Corda","Animar Corda","Mãos Flamejantes","Mãos Flamejantes","Cusar Medo","Cusar Medo","Enfeitiçar Pessoa","Enfeitiçar Pessoa","Enfeitiçar Pessoa","Toque Macabro","Toque Macabro","Leque Cromático","Leque Cromático","Compreender Idiomas","Compreender Idiomas","Compreender Idiomas","Confusão Menor","Curar Ferimentos Leve","Detectar Portas Secretas","Detectar Portas Secretas","Detectar Portas Secretas","Detectar Mortos-Vivos","Detectar Mortos-Vivos","Transformação Momentânea","Transformação Momentânea","Transformação Momentânea","Suportar Elemento","Suportar Elemento","Suportar Elemento","Aumentar Pessoa","Aumentar Pessoa","Aumentar Pessoa","Apagar","Apagar","Recuo Acelerado","Recuo Acelerado","Recuo Acelerado","Queda Suave","Área Escorregadia","Área Escorregadia","Cerrar Portas","Cerrar Portas","Hipnostimo","Hipnostimo","Identificação","Identificação","Salto","Salto","Armadura Arcana","Armadura Arcana","Armadura Arcana","Mísseis Mágicos","Mísseis Mágicos","Arma Mágica","Arma Mágica","Arma Mágica","Montaria Arcana","Montaria Arcana","Montaria Arcana","Aura Mágica de Nystul","Aura Mágica de Nystul","Névoa Obscurescente","Névoa Obscurescente","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Raio do Enfraquecimento","Raio do Enfraquecimento","Reduzir Pessoa","Reduzir Pessoa","Remover Medo","Remover Medo","Escudo Arcano","Escudo Arcano","Toque Chocante","Toque Chocante","Imagem Silenciosa","Imagem Silenciosa","Sono","Sono","Invocar Criaturas I","Invocar Criaturas I","Disco Flutuante de Tenser","Disco Flutuante de Tenser","Disco Flutuante de Tenser","Ataque Certeiro","Ataque Certeiro","Dissimular Tendência","Servo Invisível","Servo Invisível","Ventriloquismo","Ventriloquismo"];
				valorMagiaArc = [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,50,50,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,125,125,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,50,50,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,50,25,25,25,25];
				break;
			case 2:
				magiaArc = ["Mensageiro Animal","Transe Animal","Tranca Arcana","Vigor do Urso","Vigor do Urso","Vigor do Urso","Cegueira/Surdez","Cegueira/Surdez","Nublar","Nublar","Força do Touro","Força do Touro","Força do Touro","Acalmar Emoções","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Comandar Mortos-Vivos","Comandar Mortos-Vivos","Chama Contínua","Curar Ferimentos Moderados","Escuridão","Visão no Escuro","Visão no Escuro","Visão no Escuro","Pasmar Monstro","Retardar Envenenamento","Detectar Pensamentos","Detectar Pensamentos","Transformação Momentânea","Transformação Momentânea","Esplendor da Águia","Esplendor da Águia","Esplendor da Águia","Cativar","Vitalidade Ilusória","Vitalidade Ilusória","Esfera Flamejante","Esfera Flamejante","Névoa","Astúcia da Raposa","Astúcia da Raposa","Astúcia da Raposa","Toque do Carniçal","Poeira Ofuscante","Poeira Ofuscante","Lufada de Vento","Padrão Hipnótico","Padrão Hipnótico","Invisibilidade","Invisibilidade","Invisibilidade","Arrombar","Arrombar","Arrombar","Armadilha de Leomund","Levitação","Levitação","Localizar Objeto","Boca Encantada","Flecha Ácida de Melf","Flecha Ácida de Melf","Imagem Menor","Reflexos","Reflexos","Confudir Detecção","Obscurecer Objeto","Sabedoria da Coruja","Sabedoria da Coruja","Sabedoria da Coruja","Proteção contra Flechas","Proteção contra Flechas","Proteção contra Flechas","Pirotecnia","Pirotecnia","Resistência a Elementos","Resistência a Elementos","Resistência a Elementos","Truque da Corda","Aterrorizar","Raio Ardente","Raio Ardente","Ver o Invisível","Ver o Invisível","Ver o Invisível","Despedaçar","Silêncio","Explosão Sonora","Mão Espectral","Patas de Aranha","Patas de Aranha","Invocar Criatura II","Invocar Criatura II","Invocar Enxames","Invocar Enxames","O Riso Histérico de Tasha","Toque da Idiotice","Teia","Teia","Vento Sussurrante"];
				valorMagiaArc = [200,200,175,150,150,150,150,150,150,150,150,150,150,200,150,150,150,150,150,200,200,150,150,150,150,150,200,150,150,150,150,150,150,150,200,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,200,150,150,150,160,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,200,200,150,150,150,150,150,150,150,150,150,150,150,150];
				break;
			case 3:
				magiaArc = ["Visão Arcana","Visão Arcana","Piscar","Piscar","Clarividência/Clariaudiência","Clarividência/Clariaudiência","Curar Ferimentos Graves","Luz do Dia","Luz do Dia","Luz do Dia","Sono Profundo","Sono Profundo","Dissipar Magia","Dissipar Magia","Dissipar Magia","Deslocamento","Deslocamento","Runas Explosivas","Bola de Fogo","Bola de Fogo","Flecha de Chamas","Flecha de Chamas","Vôo","Vôo","Vôo","Forma Gasosa","Forma Gasosa","Descanso Tranqüilo","Descanso Tranqüilo","Loquacidade","Boa Esperança","Imobilizar Mortos-Vivos","Imobilizar Mortos-Vivos","Velocidade","Velocidade","Velocidade","Heroísmo","Heroísmo","Imobilizar Pessoa","Imobilizar Pessoa","Escrita Ilusória","Esfera de Invisibilidade","Esfera de Invisibilidade","Esfera de Invisibilidade","Lâmina Afiada","Lâmina Afiada","Lâmina Afiada","Pequeno Refúgio de Leomund","Pequeno Refúgio de Leomund","Relâmpago","Relâmpago","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Círculo Mágico Contra o Caos/Mal/Bem/Ordem","Arma Mágica Maior","Arma Mágica Maior","Arma Mágica Maior","Imagem Maior","Imagem Maior","Dificultar Detecção","Dificultar Detecção","Montaria Fantasmagórica","Montaria Fantasmagórica","Proteção Contra Elementos","Proteção Contra Elementos","Proteção Contra Elementos","Fúria","Fúria","Raio de Exaustão","Raio de Exaustão","Esculpir o Som","Página Secreta","Selo da Serpente Sépia","Encolher Item","Nevasca","Nevasca","Lentidão","Lentidão","Falar com Animais","Névoa Fétida","Névoa Fétida","Sugestão","Sugestão","Invocar Criaturas III","Invocar Criaturas III","Idiomas","Idiomas","Idiomas","Toque Vampírico","Toque Vampírico","Respirar na Água","Respirar na Água","Respirar na Água","Muralha de Vento","Muralha de Vento"];
				valorMagiaArc = [375,375,375,375,375,375,525,525,525,525,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,525,525,375,375,375,375,375,375,375,375,375,425,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,425,425,375,375,375,375,375,375,375,375,375,525,375,875,375,375,375,375,375,575,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375];
				break;
			case 4:
				magiaArc = ["Criar Mortos-Vivos Menores","Criar Mortos-Vivos Menores","Olho Arcano","Olho Arcano","Olho Arcano","Rogar Maldição","Rogar Maldição","Enfeitiçar Monstro","Enfeitiçar Monstro","Enfeitiçar Monstro","Confusão","Confusão","Confusão","Praga","Praga","Desespero Esmagador","Desespero Esmagador","Curar Ferimentos Críticos","Detectar Vidência","Porta Dimensional","Porta Dimensional","Porta Dimensional","Porta Dimensional","Âncora Dimensional","Âncora Dimensional","Âncora Dimensional","Drenar Temporário","Drenar Temporário","Aumentar Pessoa em Massa","Aumentar Pessoa em Massa","Os Tentáculos Negros de Evard","Os Tentáculos Negros de Evard","Medo","Medo","Escudo de Fogo","Escudo de Fogo","Escudo de Fogo","Armadilha de Fogo","Armadilha de Fogo","Movimento Livre","Movimento Livre","Movimento Livre","Missão Menor","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Terreno Ilusório","Terreno Ilusório","Tempestade Glacial","Tempestade Glacial","Parede Ilusória","Parede Ilusória","Invisibilidade Maior","Invisibilidade Maior","Invisibilidade Maior","Refúgio Seguro de Leomund","Refúgio Seguro de Leomund","Localizar Criatura","Criar Itens Efêmeros","Criar Itens Efêmeros","Modificar Memória","Neutralizar Veneno","Esfera Resiliente de Otiluke","Esfera Resiliente de Otiluke","Assassino Fantasmagórico","Assassino Fantasmagórico","Metamorfosear","Metamorfosear","Padrão Prismático","Padrão Prismático","Melhoria Mnmônica de Rary","Reduzir Pessoa em Massa","Reduzir Pessoa em Massa","Remover Maldição","Remover Maldição","Remover Maldição","Repelir Insetos","Vidência","Vidência","Conjuração de Sombras","Conjuração de Sombras","Grito","Grito","Névoa Sólida","Névoa Sólida","Falar com Plantas","Moldar Rochas","Moldar Rochas","Pele Rochosa","Pele Rochosa","Pele Rochosa","Invocar Criatura IV","Invocar Criatura IV","Muralha de Fogo","Muralha de Fogo","Muralha de Fogo","Muralha de Gelo","Muralha de Gelo","Muralha de Gelo","Zona de Silêncio"];
				valorMagiaArc = [1050,1050,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,725,725,1000,1000,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,700,700,700,700,700,700,700,700,1000,700,700,950,950,950,700,700,700,700,700,700,700,700,1000];
				break;
			case 5:
				magiaArc = ["Ampliar Animais","Ampliar Animais","Metamorfose Tórrida","Metamorfose Tórrida","Metamorfose Tórrida","A Mão Interposta de Bigby","A Mão Interposta de Bigby","Malogro","Malogro","Cancelar Encantamento","Cancelar Encantamento","Cancelar Encantamento","Nuvem Mortal","Nuvem Mortal","Cone Glacial","Cone Glacial","Cone Glacial","Contato Extra-Planar","Contato Extra-Planar","Curar Ferimentos Leves em Massa","Expulsão","Expulsão","Expulsão","Dissipar Magia Maior","Dissipar Magia Maior","Dissipar Magia Maior","Dominar Pessoas","Dominar Pessoas","Sonho","Compor","Compor","Visão Falsa","Visão Falsa","Enfraquecer o Intelecto","Enfraquecer o Intelecto","Imobilizar Monstro","Imobilizar Monstro","Imobilizar Monstro","Imobilizar Monstro","Arca Secreta de Leomud","Recipiente Arcano","Criar Itens Temporários","Criar Itens Temporários","Névoa Mental","Névoa Mental","Miragem Arcana","Miragem Arcana","Cão Fiel de Mordenkainen","Cão Fiel de Mordenkainen","O Santuário Particular de Mordenkainenn","O Santuário Particular de Mordenkainenn","Pesadelo","Pesadelo","Vôo Prologando","Vôo Prologando","Vôo Prologando","Vôo Prologando","Criar Passagens","Criar Passagens","Criar Passagens","Permanência","Imagem Persistente","Imagem Persistente","Âncora Planar Menor","Âncora Planar Menor","Olhos Observadores","Olhos Observadores","Ligação Telepática de Rary","Ligação Telepática de Rary","Modificar Aparência","Modificar Aparência","Enviar Mensagem","Enviar Mensagem","Enviar Mensagem","Evocação de Sombra","Evocação de Sombra","Canção da Discórdia","Invocar Criatura V","Invocar Criatura V","Símbolo da Dor","Símbolo do Sono","Telecinésia","Telecinésia","Teletranporte","Teletranporte","Teletranporte","Teletranporte","Teletranporte","Lama em Pedra","Lama em Pedra","Pedra em Lama","Pedra em Lama","Muralha de Energia","Muralha de Energia","Muralha de Energia","Muralha de Pedra","Muralha de Pedra","Muralha de Pedra","Ondas da Fadiga","Ondas da Fadiga"];
				valorMagiaArc = [1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1625,1125,1125,1125,1625,1625,1625,1125,1125,1125,1125,1125,1325,1325,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,10125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1625,1125,1125,2125,2125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125];
				break;
			case 6:
				magiaArc = ["Névoa Ácida","Névoa Ácida","Analisar Encantamento","Analisar Encantamento","Analisar Encantamento","Animar Objetos","Campo Antimagia","Campo Antimagia","Campo Antimagia","Vigor do Urso em Massa","Vigor do Urso em Massa","Vigor do Urso em Massa","A mão Vigorosa de Bigby","A mão Vigorosa de Bigby","Força do Toura em Massa","Força do Toura em Massa","Força do Toura em Massa","Agilidade do Gato em Massa","Agilidade do Gato em Massa","Agilidade do Gato em Massa","Corrente de Relâmpagos","Corrente de Relâmpagos","Corrente de Relâmpagos","Círculo da Morte","Círculo da Morte","Contigência","Controlar a Água","Controlar a Água","Criar Mortos-Vivos","Curar Ferimentos Moderados em Massa","Desintegrar","Desintegrar","Desintegrar","Dissipar Magiar Maior","Dissipar Magiar Maior","Dissipar Magiar Maior","Dissipar Magiar Maior","Espendor da Águia em Massa","Espendor da Águia em Massa","Espendor da Águia em Massa","Ataque Visual","Ataque Visual","Encontrar o Caminho","Carne para Pedra","Carne para Pedra","Astúcia da Raposa em Massa","Astúcia da Raposa em Massa","Astúcia da Raposa em Massa","Tarefa/Missão","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Proteger Fortaleza","Banquete de Heróis","Heroísmo Maior","Heroísmo Maior","Lendas e História","Despistar","Despistar","Elucubração de Mordekainen","Mover Terra","Mover Terra","Esfera Congelante de Otiluke","Esfera Congelante de Otiluke","Sabedoria da Coruja em Massa","Sabedoria da Coruja em Massa","Sabedoria da Coruja em Massa","Imagem Permanente","Imagem Permanente","Âncora Planar","Âncora Planar","Imagem Programada","Imagem Programada","Repulsão","Repulsão","Andar nas Sombras","Andar nas Sombras","Andar nas Sombras","Pedra para Carne","Pedra para Carne","Pedra para Carne","Sugestão em Massa","Sugestão em Massa","Invocar Criaturas VI","Invocar Criaturas VI","Símbolo do Medo","Símbolo da Persuasão","Vibração Sônica","Transformação de Tenser","Transformação de Tenser","Visão da Verdade","Visão da Verdade","Visão da Verdade","Destruir Mortos-Vivos","Destruir Mortos-Vivos","Véu","Véu","Muralha de Ferro","Muralha de Ferro","Muralha de Ferro"];
				valorMagiaArc = [1650,1650,1650,1650,1650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2150,2150,1650,1650,1650,2350,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2400,1650,1650,1900,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1675,1675,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2650,6650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650];
				break;
			case 7:
				magiaArc = ["Visão Arcana Maior","Visão Arcana Maior","Visão Arcana Maior","Banimento","Banimento","Banimento","Banimento","A Mão Poderosa de Bigby","A Mão Poderosa de Bigby","A Mão Poderosa de Bigby","Controlar Mortos-Vivo","Controlar Mortos-Vivo","Controlar Mortos-Vivo","Controlar Clima","Controlar Clima","Controlar Clima","Bola de Fogo Controlável","Bola de Fogo Controlável","Bola de Fogo Controlável","A Convocação Instantânea de Drowmij","A Convocação Instantânea de Drowmij","Passeio Etéreo","Passeio Etéreo","Passeio Etéreo","Passeio Etéreo","Dedo da Morte","Dedo da Morte","Dedo da Morte","Cuba da Força","Cuba da Força","Cuba da Força","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Insanidade","Insanidade","Insanidade","Invisibilidade em Massa","Invisibilidade em Massa","Invisibilidade em Massa","Invisibilidade em Massa","Desejo Restrito","Mansão Magnifica de Mordenkainen","Mansão Magnifica de Mordenkainen","Espada de Mordenkainen","Espada de Mordenkainen","Espada de Mordenkainen","Porta Dimensional","Porta Dimensional","Porta Dimensional","Viagem Planar","Viagem Planar","Viagem Planar","Palavra de Poder, cegar","Palavra de Poder, cegar","Palavra de Poder, cegar","Rajada Prismática","Rajada Prismática","Rajada Prismática","Rajada Prismática","Projetar Imagem","Projetar Imagem","Projetar Imagem","Inveter a Gravidade","Inveter a Gravidade","Inveter a Gravidade","Vidência Maior","Vidência Maior","Vidência Maior","Refugiar Itens","Refugiar Itens","Refugiar Itens","Conjuração de Sombra Maior","Conjuração de Sombra Maior","Conjuração de Sombra Maior","Simulacro","Reverter Magia","Reverter Magia","Reverter Magia","Estátua","Estátua","Invocar Criatura VII","Invocar Criatura VII","Invocar Criatura VII","Símbolo do Atordoamento","Símbolo da Fraqueza","Teletransportar Objetos","Teletransportar Objetos","Teletransportar Objetos","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Visão","Visão","Ondas da Exaustão","Ondas da Exaustão","Ondas da Exaustão"];
				valorMagiaArc = [2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,3275,3275,2275,2275,2275,2275,2275,2275,2275,2775,2775,2775,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,3775,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2280,2280,2280,2275,2275,2275,2275,2275,2275,2275,2275,2275,7275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275];
				break;
			case 8:
				magiaArc = ["Antipatia","Antipatia","O Punho Cerrado de Bigby","O Punho Cerrado de Bigby","O Punho Cerrado de Bigby","Prisão","Prisão","Prisão","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Clone","Criar Mortos-Vivos Aprimorados","Criar Mortos-Vivos Aprimorados","Criar Mortos-Vivos Aprimorados","Ordem","Ordem","Ordem","Tranca Dimensional","Tranca Dimensional","Tranca Dimensional","Discenir Localização","Discenir Localização","Discenir Localização","Discenir Localização","Evaporação","Evaporação","Evaporação","Nuvem Incendiária","Nuvem Incendiária","Nuvem Incendiária","Corpo de Ferro","Corpo de Ferro","Corpo de Ferro","Labirinto","Labirinto","Labirinto","Limpar a Mente","Limpar a Mente","Limpar a Mente","Momento de Presciência","Momento de Presciência","Momento de Presciência","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Dança Irresistível de Otto","Dança Irresistível de Otto","Dança Irresistível de Otto","Âncora Planar Maior","Âncora Planar Maior","Âncora Planar Maior","Raio Polar","Raio Polar","Raio Polar","Metarmorfosear Objetos","Metarmorfosear Objetos","Metarmorfosear Objetos","Palavra de Poder, atordoar","Palavra de Poder, atordoar","Palavra de Poder, atordoar","Muralha Prismática","Muralha Prismática","Muralha Prismática","Proteção Contra Magías","Proteção Contra Magías","Proteção Contra Magías","Proteção Contra Magías","Olhos Observadores Maior","Olhos Observadores Maior","Olhos Observadores Maior","Padrão Cintilante","Padrão Cintilante","Padrão Cintilante","Animação Ilusória","Animação Ilusória","Evocação de Sombra Maior","Evocação de Sombra Maior","Evocação de Sombra Maior","Grito Maior","Grito Maior","Grito Maior","Invocar Criaturas VIII","Invocar Criaturas VIII","Invocar Criaturas VIII","Explosão Solar","Explosão Solar","Explosão Solar","Símbolo da Morte","Símbolo da Insanidade","Simpatia","Simpatia","Entase Temporal","Entase Temporal","Entase Temporal","Entase Temporal","Aprisionar a Alma","Aprisionar a Alma"];
				valorMagiaArc = [3000,3000,3000,3000,3000,8500,8500,8500,3000,3000,3000,3000,4000,3000,3000,3000,3600,3600,3600,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,8000,8000,4500,4500,3500,3500,3500,3500,13000,13000];
				break;
			case 9:
				magiaArc = ["Projeção Astral","Projeção Astral","Projeção Astral","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","Dominar Monstro","Dominar Monstro","Dominar Monstro","Dominar Monstro","Dominar Monstro","Drenar Energia","Drenar Energia","Drenar Energia","Drenar Energia","Forma Etérea","Forma Etérea","Forma Etérea","Forma Etérea","Forma Etérea","Sexto Sentido","Sexto Sentido","Sexto Sentido","Sexto Sentido","Lebertação","Lebertação","Lebertação","Lebertação","Lebertação","Lebertação","Portal","Portal","Portal","Portal","Portal","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Aprisionamento","Aprisionamento","Aprisionamento","Aprisionamento","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Esfera Prismática","Esfera Prismática","Esfera Prismática","Esfera Prismática","Refúgio","Refúgio","Refúgio","Refúgio","Sombras","Sombras","Sombras","Sombras","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Prender Alma","Prender Alma","Prender Alma","Invocar Criaturas IX","Invocar Criaturas IX","Invocar Criaturas IX","Invocar Criaturas IX","Círculo de Teletransporte","Círculo de Teletransporte","Círculo de Teletransporte","Parar o Tempo","Parar o Tempo","Parar o Tempo","Parar o Tempo","Parar o Tempo","Grito de Banshee","Grito de Banshee","Grito de Banshee","Grito de Banshee","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Desejo"];
				valorMagiaArc = [4870,4870,4870,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,8825,8825,8825,8825,8825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,4825,4825,4825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,28825];
				break;
		};
		return "Pergaminho de Magia Arcano de nível: " + nvlMagia + " e nível do conjurador: " + nvlConj + " com a magia: " + magiaArc[idMagiaArc] + "no valor de " + valorMagiaArc[idMagiaArc] +" PO.";
	};

	if (tipo == 2) {																	//magia divina
		var magiaDiv = new Array ();
		var valorMagiaDiv = new Array();
		var idMagiaDiv = Math.floor(Math.random() * 100 + 1);
		switch(nvlMagia){
			case 0:
				magiaDiv = ["Criar Água","Criar Água","Criar Água","Criar Água","Criar Água","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Curar Ferimentos Mínimo","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Magia","Detectar Venenos","Detectar Venenos","Detectar Venenos","Detectar Venenos","Detectar Venenos","Detectar Venenos","Detectar Venenos","Brilho","Brilho","Brilho","Brilho","Brilho","Brilho","Brilho","Guia","Guia","Guia","Guia","Guia","Guia","Guia","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Infligir Ferimentos Mínimo","Intuir Direção","Intuir Direção","Intuir Direção","Intuir Direção","Intuir Direção","Intuir Direção","Intuir Direção","Luz","Luz","Luz","Luz","Luz","Luz","Luz","Luz","Consertar","Consertar","Consertar","Consertar","Consertar","Consertar","Consertar","Purificar Alimentos","Purificar Alimentos","Purificar Alimentos","Purificar Alimentos","Purificar Alimentos","Purificar Alimentos","Purificar Alimentos","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Ler Magia","Resistência","Resistência","Resistência","Resistência","Resistência","Resistência","Resistência","Virtude","Virtude","Virtude","Virtude","Virtude","Virtude","Virtude"];
				valorMagiaDiv = [12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5,12.5];
				break;
			case 1:
				magiaDiv = ["Alarme","Maldição Menor","Maldição Menor","Benção","Benção","Benção","Abençoar Água","Abençoar Água","Abençoar Água","Abençoar Arma","Alcamar Animais","Alcamar Animais","Causar Medo","Causar Medo","Enfeitiçar Animais","Enfeitiçar Animais","Comando","Comando","Comando","Compreender Idiomas","Compreender Idiomas","Curar Ferimentos Leve","Curar Ferimentos Leve","Curar Ferimentos Leve","Curar Ferimentos Leve","Curar Ferimentos Leve","Amaldiçoar Água","Amaldiçoar Água","Visão da Morte","Visão da Morte","Detectar Animais ou Plantas","Detectar Animais ou Plantas","Detectar o Caos/Mal/Bem/Ordem","Detectar o Caos/Mal/Bem/Ordem","Detectar o Caos/Mal/Bem/Ordem","Detectar Armadilha","Detectar Armadilha","Detectar Mortos-Vivos","Detectar Mortos-Vivos","Auxílio Divino","Auxílio Divino","Desespero","Desespero","Suportar Elemento","Suportar Elemento","Suportar Elemento","Suportar Elemento","Suportar Elemento","Constrição","Constrição","Escudo Entrópico","Escudo Entrópico","Fogo das Fadas","Fogo das Fadas","Bom Fruto","Bom Fruto","Esconder-se de animais","Esconder-se de animais","Esconder-se de mortos-vivos","Esconder-se de mortos-vivos","Infligir Ferimentos Leves","Infligir Ferimentos Leves","Salto","Salto","Passos Longos","Passos Longos","Presa Mágica","Presa Mágica","Pedra Encantada","Pedra Encantada","Pedra Encantada","Pedra Encantada","Arma Mágica","Arma Mágica","Névoa Obscurescente","Névoa Obscurescente","Névoa Obscurescente","Névoa Obscurescente","Passos sem Pegadas","Passos sem Pegadas","Criar Chamas","Criar Chamas","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Proteção contra Caos/Mal/Bem/Ordem","Remover Medo","Remover Medo","Santuário","Santuário","Escudo da Fé","Escudo da Fé","Arma Abençoada","Arma Abençoada","Falar com Animais","Falar com Animais","Invocar Criaturas I","Invocar Criaturas I","Invocar Aliado da Natureza I","Invocar Aliado da Natureza I"];
				valorMagiaDiv = [100,25,25,25,25,25,50,50,50,100,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,50,50,50,50,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,50,50,25,25,25,25];
				break;
			case 2:
				magiaDiv = ["Alarme","Transe Animal","Augúrio","Augúrio","Pele de Árvore","Pele de Árvore","Vigor do Urso","Vigor do Urso","Vigor do Urso","Força do Touro","Força do Touro","Força do Touro","Acalmar Emoções","Acalmar Emoções","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Esfriar Metal","Consagrar","Consagrar","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Escuridão","Escuridão","Drenar Força Vital","Retardar Envenenamento","Retardar Envenenamento","Retardar Envenenamento","Profanar","Profanar","Esplendor da Águia","Esplendor da Águia","Esplendor da Águia","Cativar","Cativar","Encontrar Armadilha","Encontrar Armadilha","Armadilha de Fogo","Lâmina de Fogo","Lâmina de Fogo","Esfera Flamejante","Esfera Flamejante","Névoa","Névoa","Descanso Tranquilo","Lufada de Vento","Esquentar Metal","Imobilizar Animal","Imobilizar Animal","Imobilizar Pessoa","Imobilizar Pessoa","Imobilizar Pessoa","Infligir Ferimentos Moderados","Infligir Ferimentos Moderados","Tornar Inteiro","Tornar Inteiro","Sabedoria da Coruja","Sabedoria da Coruja","Sabedoria da Coruja","Reduzir Pessoa","Remover Paralísia","Remover Paralísia","Resistência a Elementos","Resistência a Elementos","Resistência a Elementos","Restauração Menor","Restauração Menor","Restauração Menor","Despedaçar","Despedaçar","Progeter Outro","Progeter Outro","Silêncio","Silêncio","Armadilha","Amolecer Terra e Pedra","Explosão Sonora","Explosão Sonora","Falar com Plantas","Patas de Aranha","Patas de Aranha","Arma Espiritual","Arma Espiritual","Condição","Invocar Criatura II","Invocar Criatura II","Invocar Aliado da Natureza II","Invocar Aliado da Natureza II","Invocar Enxames","Invocar Enxames","Forma de Árvore","Dissimular Tendência","Dissimular Tendência","Torcer Madeira","Torcer Madeira","Moldar Madeira","Zona da Verdade","Zona da Verdade"];
				valorMagiaDiv = [150,150,175,175,150,150,150,150,150,150,150,150,150,150,150,150,150,150,200,200,150,150,150,150,150,150,150,150,150,150,200,200,150,150,150,150,150,150,150,175,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150];
				break;
			case 3:
				magiaDiv = ["Criar Mortos Vivos Menores","Criar Mortos Vivos Menores","Rogar Maldição","Rogar Maldição","Cegueira/Surdez","Cegueira/Surdez","Convocar Relâmpagos","Convocar Relâmpagos","Praga","Praga","Chama Contínua","Chama Contínua","Criar Alimentos","Criar Alimentos","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Visão no Escuro","Luz do Dia","Luz do Dia","Escuridão Profunda","Escuridão Profunda","Enfraquecer Plantas","Enfraquecer Plantas","Dissipar Magia","Dissipar Magia","Dominar Animais","Dominar Animais","Símbolo de Proteção","Símbolo de Proteção","Curar Montaria","Mão Opífera","Mão Opífera","Infligir Ferimentos Grave","Infligir Ferimentos Grave","Purgar Invisibilidade","Purgar Invisibilidade","Localizar Objetos","Localizar Objetos","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Círculo Mágico contra o Caos/Mal/Bem/Ordem","Presa Mágica Maior","Presa Mágica Maior","Roupra Encantada","Roupra Encantada","Mesclar-se às Rochas","Mesclar-se às Rochas","Neutralizar Venenos","Neutralizar Venenos","Neutralizar Venenos","Obscurecer Objeto","Obscurecer Objeto","Ampliar Plantas","Ampliar Plantas","Oração","Oração","Oração","Proteção contra Elementos","Proteção contra Elementos","Extinguir Fogo","Extinguir Fogo","Remover Cegueira/Surdez","Remover Cegueira/Surdez","Remover Cegueira/Surdez","Remover Maldição","Remover Maldição","Remover Doenças","Remover Doenças","Luz Cegante","Luz Cegante","Luz Cegante","Nevasca","Nevasca","Armadilha","Armadilha","Falar com Mortos","Falar com Mortos","Falar com Mortos","Falar com Plantas","Falar com Plantas","Crescer Espinhos","Crescer Espinhos","Moldar Rochas","Moldar Rochas","Invocar Criaturas III","Invocar Criaturas III","Invocar Aliados da Natureza III","Invocar Aliados da Natureza III","Respirar na Água","Respirar na Água","Respirar na Água","Caminha na Água","Caminha na Água","Muralha de Vento","Muralha de Vento"];
				valorMagiaDiv = [625,625,375,375,375,375,375,375,375,375,425,425,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,575,575,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375];
				break;
			case 4:
				magiaDiv = ["Criar Mortos-Vivos Menores","Criar Mortos-Vivos Menores","Olho Arcano","Olho Arcano","Olho Arcano","Rogar Maldição","Rogar Maldição","Enfeitiçar Monstro","Enfeitiçar Monstro","Enfeitiçar Monstro","Confusão","Confusão","Confusão","Praga","Praga","Desespero Esmagador","Desespero Esmagador","Curar Ferimentos Críticos","Detectar Vidência","Porta Dimensional","Porta Dimensional","Porta Dimensional","Porta Dimensional","Âncora Dimensional","Âncora Dimensional","Âncora Dimensional","Drenar Temporário","Drenar Temporário","Aumentar Pessoa em Massa","Aumentar Pessoa em Massa","Os Tentáculos Negros de Evard","Os Tentáculos Negros de Evard","Medo","Medo","Escudo de Fogo","Escudo de Fogo","Escudo de Fogo","Armadilha de Fogo","Armadilha de Fogo","Movimento Livre","Movimento Livre","Movimento Livre","Missão Menor","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Terreno Ilusório","Terreno Ilusório","Tempestade Glacial","Tempestade Glacial","Parede Ilusória","Parede Ilusória","Invisibilidade Maior","Invisibilidade Maior","Invisibilidade Maior","Refúgio Seguro de Leomund","Refúgio Seguro de Leomund","Localizar Criatura","Criar Itens Efêmeros","Criar Itens Efêmeros","Modificar Memória","Neutralizar Veneno","Esfera Resiliente de Otiluke","Esfera Resiliente de Otiluke","Assassino Fantasmagórico","Assassino Fantasmagórico","Metamorfosear","Metamorfosear","Padrão Prismático","Padrão Prismático","Melhoria Mnmônica de Rary","Reduzir Pessoa em Massa","Reduzir Pessoa em Massa","Remover Maldição","Remover Maldição","Remover Maldição","Repelir Insetos","Vidência","Vidência","Conjuração de Sombras","Conjuração de Sombras","Grito","Grito","Névoa Sólida","Névoa Sólida","Falar com Plantas","Moldar Rochas","Moldar Rochas","Pele Rochosa","Pele Rochosa","Pele Rochosa","Invocar Criatura IV","Invocar Criatura IV","Muralha de Fogo","Muralha de Fogo","Muralha de Fogo","Muralha de Gelo","Muralha de Gelo","Muralha de Gelo","Zona de Silêncio"];
				valorMagiaDiv = [1050,1050,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,725,725,1000,1000,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,1000,700,700,700,700,700,700,700,700,700,700,700,700,700,700,1000,700,700,700,700,700,700,700,700,1000,700,700,950,950,950,700,700,700,700,700,700,700,700,1000];
				break;
			case 5:
				magiaDiv = ["Ampliar Animais","Ampliar Animais","Metamorfose Tórrida","Metamorfose Tórrida","Metamorfose Tórrida","A Mão Interposta de Bigby","A Mão Interposta de Bigby","Malogro","Malogro","Cancelar Encantamento","Cancelar Encantamento","Cancelar Encantamento","Nuvem Mortal","Nuvem Mortal","Cone Glacial","Cone Glacial","Cone Glacial","Contato Extra-Planar","Contato Extra-Planar","Curar Ferimentos Leves em Massa","Expulsão","Expulsão","Expulsão","Dissipar Magia Maior","Dissipar Magia Maior","Dissipar Magia Maior","Dominar Pessoas","Dominar Pessoas","Sonho","Compor","Compor","Visão Falsa","Visão Falsa","Enfraquecer o Intelecto","Enfraquecer o Intelecto","Imobilizar Monstro","Imobilizar Monstro","Imobilizar Monstro","Imobilizar Monstro","Arca Secreta de Leomud","Recipiente Arcano","Criar Itens Temporários","Criar Itens Temporários","Névoa Mental","Névoa Mental","Miragem Arcana","Miragem Arcana","Cão Fiel de Mordenkainen","Cão Fiel de Mordenkainen","O Santuário Particular de Mordenkainenn","O Santuário Particular de Mordenkainenn","Pesadelo","Pesadelo","Vôo Prologando","Vôo Prologando","Vôo Prologando","Vôo Prologando","Criar Passagens","Criar Passagens","Criar Passagens","Permanência","Imagem Persistente","Imagem Persistente","Âncora Planar Menor","Âncora Planar Menor","Olhos Observadores","Olhos Observadores","Ligação Telepática de Rary","Ligação Telepática de Rary","Modificar Aparência","Modificar Aparência","Enviar Mensagem","Enviar Mensagem","Enviar Mensagem","Evocação de Sombra","Evocação de Sombra","Canção da Discórdia","Invocar Criatura V","Invocar Criatura V","Símbolo da Dor","Símbolo do Sono","Telecinésia","Telecinésia","Teletranporte","Teletranporte","Teletranporte","Teletranporte","Teletranporte","Lama em Pedra","Lama em Pedra","Pedra em Lama","Pedra em Lama","Muralha de Energia","Muralha de Energia","Muralha de Energia","Muralha de Pedra","Muralha de Pedra","Muralha de Pedra","Ondas da Fadiga","Ondas da Fadiga"];
				valorMagiaDiv = [1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1625,1125,1125,1125,1625,1625,1625,1125,1125,1125,1125,1125,1325,1325,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,10125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1625,1125,1125,2125,2125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125];
				break;
			case 6:
				magiaDiv = ["Névoa Ácida","Névoa Ácida","Analisar Encantamento","Analisar Encantamento","Analisar Encantamento","Animar Objetos","Campo Antimagia","Campo Antimagia","Campo Antimagia","Vigor do Urso em Massa","Vigor do Urso em Massa","Vigor do Urso em Massa","A mão Vigorosa de Bigby","A mão Vigorosa de Bigby","Força do Toura em Massa","Força do Toura em Massa","Força do Toura em Massa","Agilidade do Gato em Massa","Agilidade do Gato em Massa","Agilidade do Gato em Massa","Corrente de Relâmpagos","Corrente de Relâmpagos","Corrente de Relâmpagos","Círculo da Morte","Círculo da Morte","Contigência","Controlar a Água","Controlar a Água","Criar Mortos-Vivos","Curar Ferimentos Moderados em Massa","Desintegrar","Desintegrar","Desintegrar","Dissipar Magiar Maior","Dissipar Magiar Maior","Dissipar Magiar Maior","Dissipar Magiar Maior","Espendor da Águia em Massa","Espendor da Águia em Massa","Espendor da Águia em Massa","Ataque Visual","Ataque Visual","Encontrar o Caminho","Carne para Pedra","Carne para Pedra","Astúcia da Raposa em Massa","Astúcia da Raposa em Massa","Astúcia da Raposa em Massa","Tarefa/Missão","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Globo de Invulnerabilidade","Proteger Fortaleza","Banquete de Heróis","Heroísmo Maior","Heroísmo Maior","Lendas e História","Despistar","Despistar","Elucubração de Mordekainen","Mover Terra","Mover Terra","Esfera Congelante de Otiluke","Esfera Congelante de Otiluke","Sabedoria da Coruja em Massa","Sabedoria da Coruja em Massa","Sabedoria da Coruja em Massa","Imagem Permanente","Imagem Permanente","Âncora Planar","Âncora Planar","Imagem Programada","Imagem Programada","Repulsão","Repulsão","Andar nas Sombras","Andar nas Sombras","Andar nas Sombras","Pedra para Carne","Pedra para Carne","Pedra para Carne","Sugestão em Massa","Sugestão em Massa","Invocar Criaturas VI","Invocar Criaturas VI","Símbolo do Medo","Símbolo da Persuasão","Vibração Sônica","Transformação de Tenser","Transformação de Tenser","Visão da Verdade","Visão da Verdade","Visão da Verdade","Destruir Mortos-Vivos","Destruir Mortos-Vivos","Véu","Véu","Muralha de Ferro","Muralha de Ferro","Muralha de Ferro"];
				valorMagiaDiv = [1650,1650,1650,1650,1650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2150,2150,1650,1650,1650,2350,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2400,1650,1650,1900,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1675,1675,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,2650,6650,2400,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650,1650];
				break;
			case 7:
				magiaDiv = ["Visão Arcana Maior","Visão Arcana Maior","Visão Arcana Maior","Banimento","Banimento","Banimento","Banimento","A Mão Poderosa de Bigby","A Mão Poderosa de Bigby","A Mão Poderosa de Bigby","Controlar Mortos-Vivo","Controlar Mortos-Vivo","Controlar Mortos-Vivo","Controlar Clima","Controlar Clima","Controlar Clima","Bola de Fogo Controlável","Bola de Fogo Controlável","Bola de Fogo Controlável","A Convocação Instantânea de Drowmij","A Convocação Instantânea de Drowmij","Passeio Etéreo","Passeio Etéreo","Passeio Etéreo","Passeio Etéreo","Dedo da Morte","Dedo da Morte","Dedo da Morte","Cuba da Força","Cuba da Força","Cuba da Força","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Imobilizar Pessoa em Massa","Insanidade","Insanidade","Insanidade","Invisibilidade em Massa","Invisibilidade em Massa","Invisibilidade em Massa","Invisibilidade em Massa","Desejo Restrito","Mansão Magnifica de Mordenkainen","Mansão Magnifica de Mordenkainen","Espada de Mordenkainen","Espada de Mordenkainen","Espada de Mordenkainen","Porta Dimensional","Porta Dimensional","Porta Dimensional","Viagem Planar","Viagem Planar","Viagem Planar","Palavra de Poder, cegar","Palavra de Poder, cegar","Palavra de Poder, cegar","Rajada Prismática","Rajada Prismática","Rajada Prismática","Rajada Prismática","Projetar Imagem","Projetar Imagem","Projetar Imagem","Inveter a Gravidade","Inveter a Gravidade","Inveter a Gravidade","Vidência Maior","Vidência Maior","Vidência Maior","Refugiar Itens","Refugiar Itens","Refugiar Itens","Conjuração de Sombra Maior","Conjuração de Sombra Maior","Conjuração de Sombra Maior","Simulacro","Reverter Magia","Reverter Magia","Reverter Magia","Estátua","Estátua","Invocar Criatura VII","Invocar Criatura VII","Invocar Criatura VII","Símbolo do Atordoamento","Símbolo da Fraqueza","Teletransportar Objetos","Teletransportar Objetos","Teletransportar Objetos","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Teletransporte Maior","Visão","Visão","Ondas da Exaustão","Ondas da Exaustão","Ondas da Exaustão"];
				valorMagiaDiv = [2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,3275,3275,2275,2275,2275,2275,2275,2275,2275,2775,2775,2775,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,3775,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2280,2280,2280,2275,2275,2275,2275,2275,2275,2275,2275,2275,7275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275,2275];
				break;
			case 8:
				magiaDiv = ["Antipatia","Antipatia","O Punho Cerrado de Bigby","O Punho Cerrado de Bigby","O Punho Cerrado de Bigby","Prisão","Prisão","Prisão","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Enfeitiçar Monstro em Massa","Clone","Criar Mortos-Vivos Aprimorados","Criar Mortos-Vivos Aprimorados","Criar Mortos-Vivos Aprimorados","Ordem","Ordem","Ordem","Tranca Dimensional","Tranca Dimensional","Tranca Dimensional","Discenir Localização","Discenir Localização","Discenir Localização","Discenir Localização","Evaporação","Evaporação","Evaporação","Nuvem Incendiária","Nuvem Incendiária","Nuvem Incendiária","Corpo de Ferro","Corpo de Ferro","Corpo de Ferro","Labirinto","Labirinto","Labirinto","Limpar a Mente","Limpar a Mente","Limpar a Mente","Momento de Presciência","Momento de Presciência","Momento de Presciência","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Esfera Telecinética de Otiluke","Dança Irresistível de Otto","Dança Irresistível de Otto","Dança Irresistível de Otto","Âncora Planar Maior","Âncora Planar Maior","Âncora Planar Maior","Raio Polar","Raio Polar","Raio Polar","Metarmorfosear Objetos","Metarmorfosear Objetos","Metarmorfosear Objetos","Palavra de Poder, atordoar","Palavra de Poder, atordoar","Palavra de Poder, atordoar","Muralha Prismática","Muralha Prismática","Muralha Prismática","Proteção Contra Magías","Proteção Contra Magías","Proteção Contra Magías","Proteção Contra Magías","Olhos Observadores Maior","Olhos Observadores Maior","Olhos Observadores Maior","Padrão Cintilante","Padrão Cintilante","Padrão Cintilante","Animação Ilusória","Animação Ilusória","Evocação de Sombra Maior","Evocação de Sombra Maior","Evocação de Sombra Maior","Grito Maior","Grito Maior","Grito Maior","Invocar Criaturas VIII","Invocar Criaturas VIII","Invocar Criaturas VIII","Explosão Solar","Explosão Solar","Explosão Solar","Símbolo da Morte","Símbolo da Insanidade","Simpatia","Simpatia","Entase Temporal","Entase Temporal","Entase Temporal","Entase Temporal","Aprisionar a Alma","Aprisionar a Alma"];
				valorMagiaDiv = [3000,3000,3000,3000,3000,8500,8500,8500,3000,3000,3000,3000,4000,3000,3000,3000,3600,3600,3600,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,8000,8000,4500,4500,3500,3500,3500,3500,13000,13000];
				break;
			case 9:
				magiaDiv = ["Projeção Astral","Projeção Astral","Projeção Astral","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","A Mão Esgadora de Bigby","Dominar Monstro","Dominar Monstro","Dominar Monstro","Dominar Monstro","Dominar Monstro","Drenar Energia","Drenar Energia","Drenar Energia","Drenar Energia","Forma Etérea","Forma Etérea","Forma Etérea","Forma Etérea","Forma Etérea","Sexto Sentido","Sexto Sentido","Sexto Sentido","Sexto Sentido","Lebertação","Lebertação","Lebertação","Lebertação","Lebertação","Lebertação","Portal","Portal","Portal","Portal","Portal","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Imobilizar Monstro em Massa","Aprisionamento","Aprisionamento","Aprisionamento","Aprisionamento","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Chuva de Meteoros","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Disjunção de Mordenkainen","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Palavra de Poder, matar","Esfera Prismática","Esfera Prismática","Esfera Prismática","Esfera Prismática","Refúgio","Refúgio","Refúgio","Refúgio","Sombras","Sombras","Sombras","Sombras","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Alterar Forma","Prender Alma","Prender Alma","Prender Alma","Invocar Criaturas IX","Invocar Criaturas IX","Invocar Criaturas IX","Invocar Criaturas IX","Círculo de Teletransporte","Círculo de Teletransporte","Círculo de Teletransporte","Parar o Tempo","Parar o Tempo","Parar o Tempo","Parar o Tempo","Parar o Tempo","Grito de Banshee","Grito de Banshee","Grito de Banshee","Grito de Banshee","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Encarnação Fantasmagórica","Desejo"];
				valorMagiaDiv = [4870,4870,4870,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,8825,8825,8825,8825,8825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,4825,4825,4825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,3825,28825];
				break;
		};
		return "Pergaminho de Magia Divina de nível: " + nvlMagia + " e nível do conjurador: " + nvlConj + " com a magia: " + magiaDiv[idMagiaDiv] + "no valor de " + valorMagiaDiv[idMagiaDiv] +" PO.";
	};
};

function sorteioCajados(cat) {															//função para sorteio de cajados
	var id = Math.floor(Math.random() * 100);
	var cajados = new Array();
	var valorItem = new Array();

	if (cat == 2) {
		cajados = ["Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Enfeitiçar","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Enxame","Enxame","Enxame","Enxame","Enxame","Enxame","Enxame","Enxame","Enxame","Enxame","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Cura","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Alteração de Tamanho","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Frio","Frio","Frio","Frio","Frio","Defesa","Defesa","Defesa","Defesa","Defesa"];
		valorItem = [16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,16500,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,17750,24750,24750,24750,24750,24750,24750,24750,24750,24750,24750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,27750,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,29000,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,48250,56250,56250,56250,56250,56250,58250,58250,58250,58250,58250];
	};

	if (cat == 3) {
		cajados = ["Enfeitiçar","Enfeitiçar","Enfeitiçar","Fogo","Fogo","Fogo","Fogo","Fogo","Fogo","Enxame","Enxame","Cura","Cura","Cura","Cura","Cura","Cura","Alteração de Tamanho","Alteração de Tamanho","Iluminação","Iluminação","Iluminação","Iluminação","Iluminação","Frio","Frio","Frio","Frio","Frio","Frio","Frio","Defesa","Defesa","Defesa","Defesa","Defesa","Defesa","Defesa","Abjuração","Abjuração","Abjuração","Abjuração","Abjuração","Conjuração","Conjuração","Conjuração","Conjuração","Conjuração","Encantamento","Encantamento","Encantamento","Encantamento","Encantamento","Evocação","Evocação","Evocação","Evocação","Evocação","Ilusão","Ilusão","Ilusão","Ilusão","Ilusão","Necromancia","Necromancia","Necromancia","Necromancia","Necromancia","Transmutação","Adivinhação","Adivinhação","Adivinhação","Adivinhação","Adivinhação","Adivinhação","Adivinhação","Adivinhação","Terra e Pedras","Terra e Pedras","Terra e Pedras","Terra e Pedras","Terra e Pedras","Florestas","Florestas","Florestas","Florestas","Florestas","Vida","Vida","Vida","Vida","Vida","Passagem","Passagem","Passagem","Passagem","Passagem","Poder","Poder","Poder"];
		valorItem = [16500,16500,16500,17750,17750,17750,17750,17750,17750,24750,24750,27750,27750,27750,27750,27750,27750,29000,29000,48250,48250,48250,48250,48250,56250,56250,56250,56250,56250,56250,56250,58250,58250,58250,58250,58250,58250,58250,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,65000,73500,73500,73500,73500,73500,73500,73500,73500,80500,80500,80500,80500,80500,101250,101250,101250,101250,101250,155750,155750,155750,155750,155750,170500,170500,170500,170500,170500,211000,211000,211000];
	};

	return "Cajado: " + cajados[id] + ", valor: " + valorItem[id] + " PO.";
};

function sorteioVarinhas(cat) {															//função para sorteio de varinha 
	var id = Math.floor(Math.random() * 100);
	var varinha = new Array();
	var valorVarinha = new Array();
	
	if (cat == 1) {																		//Item Menor
		varinha = ["Detectar Magia","Detectar Magia","Luz","Luz","Mãos Flamejantes","Mãos Flamejantes","Mãos Flamejantes","Enfeitiçar Animais","Enfeitiçar Animais","Enfeitiçar Animais","Enfeitiçar Pessoas","Enfeitiçar Pessoas","Enfeitiçar Pessoas","Luque Cromático","Luque Cromático","Luque Cromático","Curar Ferimentos Leves","Curar Ferimentos Leves","Curar Ferimentos Leves","Detectar Portas Secretas","Detectar Portas Secretas","Detectar Portas Secretas","Aumentar Pessoa","Aumentar Pessoa","Aumentar Pessoa","Misseis Mágicos (1º)","Misseis Mágicos (1º)","Misseis Mágicos (1º)","Toque Chocante","Toque Chocante","Toque Chocante","Invocar Criaturas I","Invocar Criaturas I","Invocar Criaturas I","Misseis Mágicos (3º)","Misseis Mágicos (3º)","Misseis Mágicos (5º)","Vigor do Urso","Vigor do Urso","Vigor do Urso","Força do Touro","Força do Touro","Força do Touro","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Escuridão","Escuridão","Luz do Dia","Luz do Dia","Luz do Dia","Retardar Envenenamento","Retardar Envenenamento","Retardar Envenenamento","Esplendor da Águia","Esplendor da Águia","Esplendor da Águia","Vitalidade Ilusória","Vitalidade Ilusória","Vitalidade Ilusória","Astúcia da Raposa","Astúcia da Raposa","Astúcia da Raposa","Toque do Carniçal","Toque do Carniçal","Imobilizar Pessoa","Imobilizar Pessoa","Imobilizar Pessoa","Invisibilidade","Invisibilidade","Invisibilidade","Arrombar","Arrombar","Arrombar","Levitação","Levitação","Levitação","Flecha Ácida de Melf","Flecha Ácida de Melf","Flecha Ácida de Melf","Reflexos","Reflexos","Reflexos","Sabedoria da Coruja","Sabedoria da Coruja","Sabedoria da Coruja","Despedaçar","Despedaçar","Silêncio","Silêncio","Invocar Criaturas II","Invocar Criaturas II","Invocar Criaturas II","Invocar Criaturas II","Teia","Teia","Teia"];
		valorVarinha = [375,375,375,375,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,750,2250,2250,3750,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500];
	};
	
	if (cat == 2) {																		//Item Médio
		varinha = ["Misseis Mágicos (5º)","Misseis Mágicos (5º)","Misseis Mágicos (5º)","Vigor do Urso","Vigor do Urso","Vigor do Urso","Vigor do Urso","Força do Touro","Força do Touro","Força do Touro","Força do Touro","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Agilidade do Gato","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Curar Ferimentos Moderados","Escuridão","Escuridão","Luz do Dia","Luz do Dia","Retardar Envenenamento","Retardar Envenenamento","Retardar Envenenamento","Esplendor da Águia","Esplendor da Águia","Esplendor da Águia","Esplendor da Águia","Vitalidade Ilusória","Vitalidade Ilusória","Astúcia da Raposa","Astúcia da Raposa","Astúcia da Raposa","Astúcia da Raposa","Toque do Carniçal","Imobilizar Pessoa","Invisibilidade","Invisibilidade","Invisibilidade","Arrombar","Arrombar","Levitação","Flecha Ácida de Melf","Flecha Ácida de Melf","Reflexos","Reflexos","Sabedoria da Coruja","Sabedoria da Coruja","Sabedoria da Coruja","Sabedoria da Coruja","Despedaçar","Silêncio","Silêncio","Invocar Criaturas II","Teia","Teia","Misseis Mágicos (7º)","Misseis Mágicos (7º)","Misseis Mágicos (7º)","Misseis Mágicos (9º)","Misseis Mágicos (9º)","Convocar Relâmpagos","Convocar Relâmpagos","Convocar Relâmpagos","Enfeitiçar Pessoas, elevado (3º)","Praga","Praga","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Dissipar Magia","Dissipar Magia","Dissipar Magia","Bola de Fogo (5º)","Bola de Fogo (5º)","Bola de Fogo (5º)","Bola de Fogo (5º)","Lâmina Afiada","Lâmina Afiada","Relâmpago (5º)","Relâmpago (5º)","Relâmpago (5º)","Relâmpago (5º)","Imagem Maior","Imagem Maior","Lentidão","Lentidão","Sugestão","Sugestão","Sugestão","Invocar Criaturas III","Invocar Criaturas III","Invocar Criaturas III","Bola de Fogo (6º)","Relâmpago (6º)","Luz Cegante (6º)"];
		valorVarinha = [3750,3750,3750,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,4500,6750,6750,6750,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,13500,13500,13500];
	};

	if (cat == 3) {																		//Item Maior
		varinha = ["Misseis Mágicos (7º)","Misseis Mágicos (7º)","Misseis Mágicos (9º)","Misseis Mágicos (9º)","Misseis Mágicos (9º)","Convocar Relâmpagos","Convocar Relâmpagos","Enfeitiçar Pessoas, elevado (3º)","Praga","Praga","Curar Ferimentos Graves","Curar Ferimentos Graves","Curar Ferimentos Graves","Dissipar Magia","Dissipar Magia","Bola de Fogo (5º)","Bola de Fogo (5º)","Lâmina Afiada","Lâmina Afiada","Relâmpago (5º)","Relâmpago (5º)","Imagem Maior","Imagem Maior","Lentidão","Lentidão","Sugestão","Sugestão","Invocar Criaturas III","Invocar Criaturas III","Bola de Fogo (6º)","Bola de Fogo (6º)","Relâmpago (6º)","Relâmpago (6º)","Luz Cegante (6º)","Luz Cegante (6º)","Convocar Relâmpagos (6º)","Convocar Relâmpagos (6º)","Bola de Fogo (8º)","Bola de Fogo (8º)","Relâmpago (8º)","Relâmpago (8º)","Enfeitiçar Monstro","Enfeitiçar Monstro","Enfeitiçar Monstro","Enfeitiçar Monstro","Curar Ferimentos Críticos","Curar Ferimentos Críticos","Curar Ferimentos Críticos","Curar Ferimentos Críticos","Curar Ferimentos Críticos","Âncora Dimensional","Âncora Dimensional","Medo","Medo","Medo","Invisibilidade Maior","Invisibilidade Maior","Invisibilidade Maior","Invisibilidade Maior","Imobilizar Pessoa, elevado (4º)","Tempestade Glacial","Tempestade Glacial","Tempestade Glacial","Tempestade Glacial","Tempestade Glacial","Inflingir Ferimentos Críticos","Inflingir Ferimentos Críticos","Inflingir Ferimentos Críticos","Neutralizar Venenos","Neutralizar Venenos","Neutralizar Venenos","Neutralizar Venenos","Envenenamento","Envenenamento","Metamorfosear","Metamorfosear","Metamorfosear","Raio do Enfraquecimento, elevado (4º)","Sugestão, elevada (4º)","Invocar Criatura VI","Invocar Criatura VI","Invocar Criatura VI","Muralha de Fogo","Muralha de Fogo","Muralha de Fogo","Muralha de Fogo","Muralha de Gelo","Muralha de Gelo","Muralha de Gelo","Muralha de Gelo","Dissipar Magia (10º)","Bola de Fogo (10º)","Relâmpago (10º)","Martelo do Caos (8º)","Destruição Sagrada (8º)","Cólera da Ordem (8º)","Nuvem Profana (8º)","Restauração","Restauração","Pele Rochosa"];
		valorVarinha = [6750,6750,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,11250,13500,13500,13500,13500,13500,13500,18000,18000,18000,18000,18000,18000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,21000,22500,22500,22500,24000,24000,24000,24000,26000,26000,33500];
	};

	return "Varinha: " + varinha[id] + ", valor: " + valorVarinha[id] + " PO.";
};

function sorteioItemMaravilhoso(cat) {													//função para sorteio de item maravilho 
	var id = Math.floor(Math.random() * 100);
	var item_marav = new Array();
	var valorItem = new Array();

	if (cat == 1) {																	//Item Menor
		item_marav = ["Amuletos de Quaal (âncora)","Solvente Universal","Filtro do Amor","Ungüento da atemporalidade","Amuletos de Quaal (leque)","Pó de Apagar Rastros","Filtro da Ocultação","Filtro da Furtividade","Filtro da Natação","Filtro da Visão","Reflexos Prateados","Amuletos de Quaal (pássaro)","Amuletos de Quaal (árvore)","Amuletos de Quaal (barco de cisne)","Filtro da Verdade","Amuletos de Quaal (chicote)","Pó da Seca","Bolsa de Truque (cinza)","Mão do Mago","Braçadeiras da Armadura +1","Manto da Resistência +1","Pérola do Poder (magia 1º nivel)","Filacteria da Fé","Bálsamo Escorregadio","Filtro de Cuspir Fogo","Flautas do Esgoto","Pó da Ilusão","Óculos de Enxergar Detalhes","Broche do Escudo","Colar de Bolas de Fogo tipo I","Pó do Aparecimento","Chapeú do Disfarce","Flauta dos Sons","Aljava de Elhonna","Amuleto da Armadura Natural +1","A Sacola Prestativa de Heward","Trombeta das Névoas","Jóia Elemental","Robe dos Ossos","Cola Soberana","Mochila de Carga tipo I","Botas Élficas","Botas do Inverno","Vela da Verdade","Manto Élfico","Olhos de Águia","Escaravelho anti-golem","Colar de Bolas de Fogo tipo III","Pedra de Alerta","Bolsa de Truque (ferrugem)","Contas da Força","Carrilhão da Abertura","Ferraduras da Velocidade","Corda da Escalada","Pó do Desaparecimento","Lentes da Detecção","Vestimenta do Druida","Estatueta de Poderes Incríveis (Corvo de Prata)","Amuleto da Saúde +2","Braçadeiras da Armadura +2","Manto do Carisma +2","Manto da Resistência +2","Manoplas do Poder do Ogro","Luvas de Apanhar Flechas","Luvas da Destreza +2","Tiara do Intelecto +2","Pedra Iônica, Fuso Transparente","O Ungüento de Keoghtom","Os Pigmentos Maravilhosos de Nalzur","Pérola do Poder (magia 2º nivel)","Periapto da Sabedoria +2","Bálsamo de Pedra","Colar de Bolas de Fogo tipo III","Diadema do Persuasão","Sandálias de Patas de Aranha","Incenso de Meditação","Mochila de Carga tipo II","Braçadeiras do Arqueiro (menor)","Pedra Iônica, Prisma Rosa Pálido","Elmo de Compreender Idiomas e Ler Magias","Colete de Fuga","Garrafa da Fumaça Eterna","A Colher de Murlynd","Colar de Bolas de Fogo tipo IV","Botas de Caminhar e Saltar","Leque do Vento","Amuleto dos Punhos Poderosos +1","Ferradura do Zéfiro","Flautas Assombradas","Colar de Bolas de Fogo tipo V","Luvas de Nadas e Escalar","Bolsa de Truque (bronze)","Diadema da Destruição (menor)","Chifre da Bondade/Maldade","Robe dos Itens Úteis","Barco Dobrável","Manto da Arraia","Garrafa do Ar","Mochila de Carga tipo III","Periapto da Saúde"];
		valorItem = [50,50,150,150,200,250,250,250,250,250,250,300,400,450,500,500,850,900,900,1000,1000,1000,1000,1000,1100,1150,1200,1250,1500,1650,1800,1800,1800,2000,2000,2000,2000,2250,2400,2400,2500,2500,2500,2500,2500,2500,2500,2700,2700,3000,3000,3000,3000,3000,3500,3500,3750,3800,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4350,4500,4800,4900,5000,5000,5000,5200,5200,5400,5400,5400,5500,5500,6000,6000,6000,6150,6250,6300,6480,6500,7000,7200,7200,7250,7400,7400];
	};

	if (cat == 2) {																	//Item Médio
		item_marav = ["Botas de Levitação","Harpa do Encantamento","Amuleto da Armadura Natural +2","Manual do Golem de Carne","Mão da Glória","Pedra Iônica, esfera vermelha escura","Pedra Iônica, esfera azul luminoso","Pedra Iônica, rombóide azul pálido","Pedra Iônica, esfera rosa e verde","Pedra Iônica, rombóide rosa","Pedra Iônica, esfera escarlate e azul","Baralho da Ilusão","Colar de Bolas de Fogo tipo VI","Vela da Invocação","Braçadeiras da Armadura +3","Manto da Resistência +3","Garrafa da Água Infinita","Colar da Adaptação","Pérola do Poder (magia 3º nivel)","Talismã da Esfera","Estatueta de Poderes Incríveis (Coruja de Serpentina)","Colar de Bolas de Fogo tipo VII","Cordão de Contas da Oração (menor)","Mochila de Carga IV","Estatueta de Poderes Incríveis (Grifo de Bronze)","Estatueta de Poderes Incríveis (Mosca de Ébano)","Luva de Armazenamento","Pedra Iônica, rombóide azul escuro","Cavalo de Pedra, corcel","Capa do Saltimbanco","Filacteria de Expulsar Mortos-Vivos","Manoplas da Ferrugem","Botas da Velocidade","Óculos Noturnos","Manual do Golem de Barro","Medalhão dos Pensamentos","Flautas da Dor","O Livro Abençoado de Baccob","Cinto do Monge","Gema da Luminosidade","Lira da Construção","Manto da Aranha","Cavalo de Pedra, cavalo de campanha","Cinto dos Anões","Periapto da Cicatrização","Trombeta dos Tritões","Pérola das Sirenas","Estatueta de Poderes Incríveis (cão de Ônix)","Amuleto da +4","Cinto da Força de Gigante +4","Botas Aladas","Braçadeiras da Armadura +4","Manto do Carisma +4","Manto da Resistência +4","Luvas da Destreza +4","Tiara do Intelecto +4","Pérola do Poder (magia 4º nivel)","Periapto da Sabedoria +4","Bainha das Lâminas Afiadas","Estatueta de Poderes Incríveis (Leão de Ouro)","Carrilhão da Interrupção","Vassoura Voadora","Estatueta de Poderes Incríveis (elefante de mármore)","Amuleto da Armadura Natural +3","Pedra Iônica, fuso iridescente","Pulseira da Amizade","Tapete Voador - 1,5 m por 1,5 m","Trombeta da Destruição","Pedra Iônica, elíptica lilás pálida","Pedra Iônica, fuso branco perolado","Buraco Portátil","Pedra da Sorte","Estatueta de Poderes Incríveis (bodes de marfim)","Corda da Contrição","Manual do Golem de Pedra","Máscara da Caveira","Picareta dos Titãs","Diadema da Destruição (maior)","Amuleto dos Punhos Poderosos +2","Manto do Deslocamento (menor)","Elmo da Ação Subaquática","Braçadeiras do Arqueiro (maior)","Braçadeiras da Armadura +5","Manto da Resistência +5","Olhos da Perdição","Pérola do Poder (magia 5º nivel)","Marreta dos Titãs","Cordão de Contas da Oração","Manto do Morcego","As Faixas de Ferro de Bilarro","Cubo de Resistência a Veneno","Elmo da Telepatia","Periapto da Resistência a Veneno","Robe das Cores Cintilantes","Manual da Saúde Corporal","Manual do Bom Exércicio","Manual d aRapidez de Movimentos","Tomo dos Grandes Pensamentos","Tomo da Liderança e Inflência","Tomo da compreensão"];
		valorItem = [7500,7500,8000,8000,8000,8000,8000,8000,8000,8000,8000,8100,8100,8400,9000,9000,9000,9000,9000,9000,9100,9150,9600,10000,10000,10000,10000,10000,10000,10080,11000,11500,12000,12000,12000,12000,12000,12500,13000,13000,13000,14000,14800,14900,15000,15100,15300,15500,16000,16000,16000,16000,16000,16000,16000,16000,16000,16000,16000,16500,16800,17000,17000,18000,18000,19000,20000,20000,20000,20000,20000,20000,21000,21000,22000,22000,23348,23760,24000,24000,24000,25000,25000,25000,25000,25000,25305,25800,26000,26000,27000,27000,27000,27000,27500,27500,27500,27500,27500,27500];
	};

	if (cat == 3) {																	//Item Maior
		item_marav = ["Algemas Dimensionais","Estatueta de Poderes Incríveis, corcel de obsidiana","Tambores do Panico","Pedra Iônica, prisma alaranjado","Pedra Iônica, prisma Verde Pálida","Lanterna da Revelação","Robe da Camuflagem","Amuleto da Armadura Natural +4","Amuleto de Proteção contra Detecção e Localização","Tapete Voador, 1,5m x 3m","Manual do Golem de Ferro","Amuleto da Saúde +6","Cinto da Força do Gigante","Braçadeiras da Armadura +6","Manto do Carisma +6","Luvas da Destreza +6","Tiara do Intelecto +6","Pedra Iônica, prisma roxo brilhante","Pérola do Poder, (magia 6º nível)","Periapto da Sabedoria +6","Escaravelho da Proteção","Pedra Iônica, elíptica lilás e verde","Anéis Portal","Bola de Cristal","Manual do Golem de Pedra Maior","Orbe das Tempestades","Botas do Teletransporte","Braçadeiras da Armadura +7","Pérola do Poder, (magia 7º nível)","Amuleto da Armadura Natural +5","Manto do Deslocamento (maior)","Bola de Cristal com Ver o Invísivel","Trombeta de Valhalla","Bola de Cristal com Detectar Pensamento","Tapete Voador, 1,8m x 2,7m","Amuleto dos Punhos Poderosos +3","Asas Voadoras ","Manto da Forma Etérea","A Fortaleza Instantânea de Daem","Manual da Sáude Corporal +2","Manual do Bom Exercício +2","Manual da Rapidez de Movimentos +2","Tomo dos Grandes Pensamentos +2","Tomo da Liderança e Influência +2","Tomo da Compreensão +2","olhos do Encantamento","Robe das Estrelas","Tapete Voador, 3m x 3m","Caveira Negra","Cubo de Energia","Braçadeiras da Armadura +8","Pérola do Poder, (magia 8º nível)","Bola de Cristal com Telepatia","Trombeta de Destruição (maior)","Pérola do Poder, (duas magias)","Elmo do Teletranporte","Gema da Visão","Robe do Arquimago","Túnica da Fé","Bola de Crital com Visão da Verdade","Pérola do Poder, (magia 9º nível)","Poço dos Diversos Mundos","Manual da Sáude Corporal +3","Manual do Bom Exercício +3","Manual da Rapidez de Movimentos +3","Tomo dos Grandes Pensamentos +3","Tomo da Liderança e Influência +3","Tomo da Compreensão +3","O Aparelho de Kwalish","Túnica da Resistência à Magia","Espelho da Oposição","Cordão de Contas da Oração (maior)","Amuleto dos Punhos Poderosos +4","Olhos da Petrificação","Taça de Comandar Elementais da Água","Braseiro de comandar Elementais do Fogo","Incensório de Comandar Elementais do Ar","Pedra de Comandar Elementais da Terra","Manual da Sáude Corporal +4","Manual do Bom Exercício +4","Manual da Rapidez de Movimentos +4","Tomo dos Grandes Pensamentos +4","Tomo da Liderança e Influência +4","Tomo da Compreensão +4","Amuleto dos Planos","Robe dos Olhos","Elmo Brilhante","Manual da Sáude Corporal +5","Manual do Bom Exercício +5","Manual da Rapidez de Movimentos +5","Tomo dos Grandes Pensamentos +5","Tomo da Liderança e Influência +5","Tomo da Compreensão +5","Garrafa do Efreeti","Amuleto dos Punhos Poderosos +5","Diamante do Caos","cubo do Portal","Frasco de Ferro","Espelho do Poder Mental","Espelho do Aprisionamento"];
		valorItem = [28000,28500,30000,30000,30000,30000,30000,32000,35000,35000,35000,36000,36000,36000,36000,36000,36000,36000,36000,36000,38000,40000,40000,42000,44000,48000,49000,49000,49000,50000,50000,50000,50000,51000,53000,54000,54000,55000,55000,55000,55000,55000,55000,55000,55000,56000,58000,60000,60000,62000,64000,64000,70000,70000,70000,73500,75000,75000,76000,80000,81000,82000,82500,82500,82500,82500,82500,82500,90000,90000,92000,95800,96000,98000,100000,100000,100000,100000,110000,110000,110000,110000,110000,110000,120000,120000,120000,137500,137500,137500,137500,137500,137500,145000,150000,160000,164000,170000,175000,200000];
	};

	return "Item Maravilhoso: " + item_marav[id] + ", valor: " + valorItem[id] + " PO";
};
