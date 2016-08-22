现实了javaStringbuffer的大部分功能：

Append 、AppendFormat、Length、Equal、IsEmpt、Clear、Insert、Remove
Replace、IndexOf、LastIndexOf、Reverse、Split

		var sb = new StringBuffer('init');
		
		console.log(sb.ToString());   // 输出 init
		
Append：

		sb.Append('hello');
		sb.Append('world');
AppendFormat：
		sb.AppendFormat('format{0}','hello');
		
Length：
		
		console.log(sb.ToString());  //输出 inithelloworld
		console.log(sb.Length()); //输出 14
Equal：
		sb.Equal('inithelloworld');
		//输出  true
		console.log(sb);
IsEmpty：
		//输出  fale
		console.log(sb.IsEmpty());
Clear：	
		sb.Clear();
		console.log(sb);
		sb.Append('hello');
Insert：
		sb.Insert(2,'111111');
		console.log(sb);
Remove：
		sb.Remove(2,6);
		console.log(sb);
Replace：
 		sb.Replace('o','T');
 		console.log(sb);
IndexOf：
 		console.log(sb.IndexOf('l'));
LastIndexOf：
 		console.log(sb.LastIndexOf('l'));
Reverse：
 		sb.Reverse();
 		
 		console.log(sb);
Split：
    console.log(sb.Split('e'));
