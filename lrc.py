f = open("lrc.txt")
line = f.readline()
while line:
	line = line.strip().replace('`', '');
	print line,
	line = f.readline()  

f.close()  
