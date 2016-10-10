/**
 * Created by JoeLiu on 2016-08-18.depandens no
 */
//构造函数
function StringBuffer()
{
  this._buffers = [];
  this._length=0;
  this._splChar = '';
  if(arguments.length>0)
  {
    for(var i=0,iLen=arguments.length;i<iLen;i++)
    {
      this.Append(arguments[i]);
    }
  }
}

StringBuffer.prototype.Restore = function()
{
  this._buffers = [];
  this.Append(arguments[0]);
  this._length = this._buffers.join(this._splChar).length;
}

//向对象中添加字符串
//参数：一个字符串值
StringBuffer.prototype.Append=function()
{
  if(arguments.length>=1)
  {
    this._length += arguments[0].length;
    this._buffers[this._buffers.length] = arguments[0];
    return true;
  }
  else
  {return false;}
}

//向对象附加格式化的字符串
//参数：参数1 格式化的字符串 参数1+ 为代替字符
StringBuffer.prototype.AppendFormat=function()
{
   if(arguments.length>=2)
     {
        var TString=arguments[0];
        if(arguments[1] instanceof Array)
        {
            for(var i=0,iLen=arguments[1].length;i<iLen;i++)
               {
                  var jIndex=i;
                  var re=eval("/\\{"+jIndex+"\\}/g;");
                  TString= TString.replace(re,arguments[1][i]);
              }
        }
        else
        {
              for(var i=1,iLen=arguments.length;i<iLen;i++)
                {
                       var jIndex=i-1;
                    var re=eval("/\\{"+jIndex+"\\}/g;");
                    TString= TString.replace(re,arguments[i]);
                }
        }
        this.Append(TString);
        return true;
     }
     else if(arguments.length==1)
     {
        this.Append(arguments[0]);
        return false;
     }
}

//字符串长度
StringBuffer.prototype.Length=function()
{
      if(this._splChar.length>0 && (!this.IsEmpty()))
        {
            return  this._length + ( this._splChar.length * ( this._buffers.length-1 ) ) ;
        }
      else
      {
            return this._length;
      }
}

//字符串是否为空
StringBuffer.prototype.IsEmpty=function()
{
      return this._buffers.length <= 0;
}

//清空
StringBuffer.prototype.Clear = function()
{
      this._buffers = [];
      this._length=0;
      return true;
}

//输出
//参数：作为字符串拼接的分隔符
StringBuffer.prototype.ToString = function()
{
     return this._buffers.join(this._splChar);
}

//插入
//参数：参数1 插入位置  参数2  插入字符
StringBuffer.prototype.Insert = function()
{
  var _iStart = arguments[0];
  var _sInsertStr = arguments[1];
  if(arguments.length>=2&&!isNaN(_iStart))
  {
    var sReturn = this._buffers.join(this._splChar);
    sReturn = sReturn.substring(0,_iStart) +_sInsertStr+ sReturn.substring(_iStart,sReturn.length);
    this.Restore(sReturn);
    return sReturn;
  }
  else
  {
    return this._buffers.join(this._splChar);
  }
}

//移除
//参数：参数1 开始移除位置  参数2  删除位置个数
StringBuffer.prototype.Remove = function()
{
  var _iStart = arguments[0];
  var _iEnd = arguments[1];
    if(arguments.length>=2&&!isNaN(_iStart)&&!isNaN(_iEnd))
    {
      var sReturn = this._buffers.join(this._splChar);
      sReturn = sReturn.substring(0,_iStart) + sReturn.substring(_iStart+_iEnd,sReturn.length);
      this.Restore(sReturn);
      return sReturn;
    }
    else
    {
      return this._buffers.join(this._splChar);
    }
}

//替换
//参数：参数1 规定子字符串或要替换的模式的 RegExp 对象   参数2 一个字符串值。规定了替换文本或生成替换文本的函数
StringBuffer.prototype.Replace = function()
{
  if(arguments.length>=2)
  {
    var sReturn = this._buffers.join(this._splChar).replace(arguments[0],arguments[1]);
    this.Restore(sReturn);
    return sReturn;
  }
  else
  {
    return this._buffers.join(this._splChar);
  }
}

//查找
//参数：可以指定一个字符串（或单个字符）
StringBuffer.prototype.IndexOf = function()
{
  if(arguments.length>=1)
  {
    return this._buffers.join(this._splChar).indexOf(arguments[0]);
  }
  else
  {
    return -1;
  }
}

//查找
StringBuffer.prototype.LastIndexOf = function()
{
  if(arguments.length>=1)
  {
    return this._buffers.join(this._splChar).lastIndexOf(arguments[0]);
  }
  else
  {
    return -1;
  }
}

//比较是否相等
StringBuffer.prototype.Equal = function()
{
    return this._buffers.join(this._splChar) === arguments[0];
}

//字符串反转
StringBuffer.prototype.Reverse = function()
{
  var sReturn = this._buffers.join(this._splChar).split(this._splChar).reverse().join(this._splChar);
  this.Restore(sReturn);
  return sReturn;
}

//字符串分割数组
//参数：用来分隔的字符
StringBuffer.prototype.Split = function()
{
  if(arguments.length>=1)
  {
    return this._buffers.join(this._splChar).split(arguments[0]);
  }
  else
  {
    return this._buffers.join(this._splChar).split(this._splChar);
  }
}