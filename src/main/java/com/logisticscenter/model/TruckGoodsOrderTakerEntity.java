package com.logisticscenter.model;

import com.cache.Cache;
import com.cache.CacheManager;
import com.common.CommonTransMethod;

import java.math.BigDecimal;
import java.util.List;

public class TruckGoodsOrderTakerEntity {
	
	public TruckGoodsOrderTakerEntity(){}
	
	//标识ID
	private int id;

	//标识ID
	private int key;

	//是否包车
	private int packageFlg;

	private String packageFlgShow;
	//包车价格
	private BigDecimal packagePrice;
	//发车时间
	private String beginDate;

	//客户
	private int client;
	//客户
	private String clientName;
	//是否删除
	private int deleteFlg;
	//客户货物类型
	private String goodsType;

	//客户货物类型
	private String goodsTypeName;

	//创建日期
	private String createDate;
	//创建时间
	private String createTime;
	//预录状态
	private int orderStatus = -1;

	private List<TruckGoodsOrderDetailEntity> children;

	//预录状态
	private String orderStatusName;
	//修改日期
	private String editDate;
	//修改时间
	private String editTime;

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
		this.key = id;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public int getPackageFlg() {
		return packageFlg;
	}
	
	public void setPackageFlg(int packageFlg) {
		this.packageFlg = packageFlg;
		this.setPackageFlgShow(packageFlg+"");
	}

	public String getPackageFlgShow() {
		return packageFlgShow;
	}

	public void setPackageFlgShow(String packageFlgShow) {
		this.packageFlgShow = CommonTransMethod.getIsOrNotString(packageFlgShow);
	}

	public BigDecimal getPackagePrice() {
		return packagePrice;
	}
	public void setPackagePrice(BigDecimal packagePrice) {
		this.packagePrice = packagePrice;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}


	public int getClient() {
		return client;
	}

	public void setClient(int client) {
		this.client = client;
		this.setClientName(client+"");
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String client) {

		this.clientName = CommonTransMethod.getClientName(client);
	}

	public String getGoodsType() {
		return goodsType;
	}

	public void setGoodsType(String goodsType) {
		this.goodsType = goodsType;
		this.setGoodsTypeName(goodsType);
	}

	public String getGoodsTypeName() {
		return goodsTypeName;
	}

	public void setGoodsTypeName(String goodsTypeName) {
		this.goodsTypeName = CommonTransMethod.getGoodsTypeName(goodsTypeName);
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getEditDate() {
		return editDate;
	}
	public void setEditDate(String editDate) {
		this.editDate = editDate;
	}
	public String getEditTime() {
		return editTime;
	}
	public void setEditTime(String editTime) {
		this.editTime = editTime;
	}
	public int getDeleteFlg() {
		return deleteFlg;
	}

	public void setDeleteFlg(int deleteFlg) {
		this.deleteFlg = deleteFlg;
	}

	public int getOrderStatus() {
		return orderStatus;
	}

	public List<TruckGoodsOrderDetailEntity> getChildren() {
		return children;
	}

	public void setChildren(List<TruckGoodsOrderDetailEntity> children) {
		this.children = children;
	}

	public void setOrderStatus(int orderStatus) {
		this.orderStatus = orderStatus;
		this.setOrderStatusName(orderStatus+"");
	}

	public String getOrderStatusName() {
		return orderStatusName;
	}

	public void setOrderStatusName(String orderStatusName) {
		this.orderStatusName = CommonTransMethod.getOrderStatusName(orderStatusName);
	}
}
