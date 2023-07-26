numPedidos = int(input())
pratos=[]
calorias=[]
veganos=[]

for i in range(1, numPedidos + 1):
    prato = input()
    pratos.append(prato)
    caloria = int(input())
    calorias.append(caloria)
    vegano=input()
    veganos.append(vegano)
    
ehVegano = False

for i in range(0, numPedidos ):
    if (veganos[i]=="s"):
        ehVegano==True
        ehVegano=str(ehVegano)
        ehVegano="(Vegano)"
    else:
        ehVegano = False
        ehVegano=str(ehVegano)
        ehVegano="(Nao-vegano)"
    
    print(f"Pedido {i+1}: {pratos[i]} {ehVegano} - {calorias[i]} calorias")
    