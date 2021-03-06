//Auto Generate File, Do NOT Modify!!!!!!!!!!!!!!!

class LevelUpMessage extends MessageBase {
	private _data:any = null;
	private _clazz:any = null;
	
	public constructor() {
		super();  
		var builder:any = dcodeIO.ProtoBuf.loadProto(game.net.ProtoFileEnum.fishing);   
		this._clazz = builder.build("LevelUp");     
	}			
	
	public setOldLevel(oldLevel:any):void {
		this._data.set("oldLevel", oldLevel);
	}

	public getOldLevel():any {
		return this._data.get("oldLevel");
	}
			
	public setNewLevel(newLevel:any):void {
		this._data.set("newLevel", newLevel);
	}

	public getNewLevel():any {
		return this._data.get("newLevel");
	}
			
	public setUserId(userId:any):void {
		this._data.set("userId", userId);
	}

	public getUserId():any {
		return this._data.get("userId");
	}
			
	public getPID():number {
		return 3024;
	}

	public initData():void {                
		this._data = new this._clazz();  
	}

	public setData(buff:egret.ByteArray):void {
		this._data = this._clazz.decode(buff);  
	}

	public toByteArray():egret.ByteArray {
		var arraybuffer: ArrayBuffer = this._data.toArrayBuffer();
		return new egret.ByteArray(arraybuffer);
	}
}
			