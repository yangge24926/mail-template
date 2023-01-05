docs = [
	{
		"_id": "email-en",
		"template": '<!DOCTYPE html><html lang="zh"><head> <meta charset="utf-8" /> <meta name="renderer" content="webkit" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width," initial-scale="1.0," maximum-scale="1.0," minimum-scale="1.0," user-scalable="no" /> <meta name="description" content="Vadata" is the quickest and most effective way to spot actionable insights from your customers! &#x5927;&#x6570;&#x636e;&#x6316;&#x6398;&#x53ef;&#x89c6;&#x5316;&#x5206;&#x6790;&#x670d;&#x52a1; /> <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-title" content="Vadata" /> <meta name="author" content="Vadata," inc. /> <title>{alternate_title}</title></head><body style="font-size:18px !important; background-color: #F8F8F8; margin: 0 !important;font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;box-sizing: border-box !important;line-height: 1.428571429 !important;-webkit-font-smoothing: antialiased !important;-webkit-text-size-adjust: none !important;width: 100% !important;height: 100% !important;"> <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;" width="100%"> <tbody> <tr> <td align="center" bgcolor="#026AEE" style="height: 10px;" class="header-bg" rainbow style="pointer-events:none; width: 100%; text-align: center; border-spacing: 0;"> </td> </tr> <tr> <td align="center" class="container" topic-entity text-center colspan="100%" style="display: block; width: 100%; max-width: 600px; min-width: 320px; clear: both !important; text-align: center; border-spacing: 0; margin: 0 auto; padding: 0;"> <div class="article-section" style="padding: 30px 0 20px 0;"> <h3 style="margin: 20px 0 10px 0;">{main_title}</h3> <p style="color: #747474; margin: 0px 0 40px 0;">{main_body}</p> <table align="center" border="0" cellpadding="0" cellspacing="0" class="emailBtn" id="btn" style="width: 194px; margin:10px auto 20px;background: #61bd4f;border-radius:4px;font-size:18px; color:#ffffff;" width="194"> <tbody> <tr> <td style="background: #026AEE; height: 49px;border-radius: 4px;color: #ffffff;padding: 5px 10px;margin-bottom:10px; min-width: 280px; text-align: center" valign="middle"> <a href="{action_link}" style="color: #ffffff; display: inline-block;line-height: 40px; text-align: center; text-decoration: none;" target="_blank" title="{action_body}">{action_body}</a> </td> </tr> </tbody> </table> <small style="color: #747474; font-size: 12px">* 以上链接会在24小时后失效</small> </div> </td> </tr> <tr> </tr> <tr> <td style="display: block; width: 100%; max-width: 600px; min-width: 320px; text-align: center;margin: 0 auto;"> <table class="center" style="text-align: center; border-spacing: 0; margin: auto;"> </table> </td> </tr> <tr style=" background-color: #F8F8F8;"> <td style="display: block;width: 100%; max-width: 600px; min-width: 320px; text-align: center; font-style: normal; color:#606060; margin: 0 auto ; padding: 10px 0; line-height: 1.4"> <table style="text-align: center; border-spacing: 0; margin: auto;"> <tbody> <tr> <td style="text-align: center; border-spacing: 0; padding: 0;"> <p style="font-size: 0.8em; max-width: 600px">按钮无法点击? 请复制粘贴此链接到您的浏览器: <a href="{action_link}" target="_blank" style="color: #146ade; overflow-wrap: break-word;word-wrap: break-word;">{action_link}</a> </p> </td> </tr> <tr> <td style="text-align: center; border-spacing: 0; padding: 0;"> <p style="font-size: 0.8em;">此邮件发送至 <a href="mailto:{main_email}" target="_blank" style="color: #146ade;">{main_email}</a>. </p> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table></body></html>'
	},
	{
		"_id": "email-en-alert",
		"main_title": "温馨提示",
		"alternate_title": "洞视提示，有新的消息被触发",
		"action_body": "查看您的数据",
		"main_body": "您有一条新提示：{alert_name}, 我们发现您的数据最近被改变!"
	},
	{
		"_id": "email-en-confirm",
		"main_title": "欢迎加入洞视",
		"alternate_title": "欢迎加入洞视",
		"action_body": "设置密码",
		"main_body": "请点击以下按钮设置您的密码。如非您本人操作，请\n<a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-en-notify",
		"main_title": "账户信息更新",
		"alternate_title": "账户信息更新",
		"action_body": "查看您的账户设置",
		"main_body": "{alternate_account} 被加入作为您的洞视新登录账号和联系方式. 如非您本人操作，请\n<a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-en-reset",
		"main_title": "密码改变确认提示",
		"alternate_title": "密码改变确认提示",
		"action_body": "设置密码",
		"main_body": "请点击以下按钮设置您的新密码。如非您本人操作，请 <a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-en-verify",
		"main_title": "账户信息改变确认提示",
		"alternate_title": "账户信息改变确认提示",
		"action_body": "确认账号",
		"main_body": "请点击以下按钮来确认此账号 {alternate_account} 作为您在洞视的另外的登入账号以及联系方式"
	},
	{
		"_id": "email-zh",
		"template": '<!DOCTYPE html><html lang="zh"><head> <meta charset="utf-8" /> <meta name="renderer" content="webkit" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width," initial-scale="1.0," maximum-scale="1.0," minimum-scale="1.0," user-scalable="no" /> <meta name="description" content="Vadata" is the quickest and most effective way to spot actionable insights from your customers! &#x5927;&#x6570;&#x636e;&#x6316;&#x6398;&#x53ef;&#x89c6;&#x5316;&#x5206;&#x6790;&#x670d;&#x52a1; /> <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-title" content="Vadata" /> <meta name="author" content="Vadata," inc. /> <title>{alternate_title}</title></head><body style="font-size:18px !important; background-color: #F8F8F8; margin: 0 !important;font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;box-sizing: border-box !important;line-height: 1.428571429 !important;-webkit-font-smoothing: antialiased !important;-webkit-text-size-adjust: none !important;width: 100% !important;height: 100% !important;"> <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;" width="100%"> <tbody> <tr> <td align="center" bgcolor="#026AEE" style="height: 10px;" class="header-bg" rainbow style="pointer-events:none; width: 100%; text-align: center; border-spacing: 0;"> </td> </tr> <tr> <td align="center" class="container" topic-entity text-center colspan="100%" style="display: block; width: 100%; max-width: 600px; min-width: 320px; clear: both !important; text-align: center; border-spacing: 0; margin: 0 auto; padding: 0;"> <div class="article-section" style="padding: 30px 0 20px 0;"> <h3 style="margin: 20px 0 10px 0;">{main_title}</h3> <p style="color: #747474; margin: 0px 0 40px 0;">{main_body}</p> <table align="center" border="0" cellpadding="0" cellspacing="0" class="emailBtn" id="btn" style="width: 194px; margin:10px auto 20px;background: #61bd4f;border-radius:4px;font-size:18px; color:#ffffff;" width="194"> <tbody> <tr> <td style="background: #026AEE; height: 49px;border-radius: 4px;color: #ffffff;padding: 5px 10px;margin-bottom:10px; min-width: 280px; text-align: center" valign="middle"> <a href="{action_link}" style="color: #ffffff; display: inline-block;line-height: 40px; text-align: center; text-decoration: none;" target="_blank" title="{action_body}">{action_body}</a> </td> </tr> </tbody> </table> <small style="color: #747474; font-size: 12px">* 以上链接会在24小时后失效</small> </div> </td> </tr> <tr> </tr> <tr> <td style="display: block; width: 100%; max-width: 600px; min-width: 320px; text-align: center;margin: 0 auto;"> <table class="center" style="text-align: center; border-spacing: 0; margin: auto;"> </table> </td> </tr> <tr style=" background-color: #F8F8F8;"> <td style="display: block;width: 100%; max-width: 600px; min-width: 320px; text-align: center; font-style: normal; color:#606060; margin: 0 auto ; padding: 10px 0; line-height: 1.4"> <table style="text-align: center; border-spacing: 0; margin: auto;"> <tbody> <tr> <td style="text-align: center; border-spacing: 0; padding: 0;"> <p style="font-size: 0.8em; max-width: 600px">按钮无法点击? 请复制粘贴此链接到您的浏览器: <a href="{action_link}" target="_blank" style="color: #146ade; overflow-wrap: break-word;word-wrap: break-word;">{action_link}</a> </p> </td> </tr> <tr> <td style="text-align: center; border-spacing: 0; padding: 0;"> <p style="font-size: 0.8em;">此邮件发送至 <a href="mailto:{main_email}" target="_blank" style="color: #146ade;">{main_email}</a>. </p> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table></body></html>'
	},
	{
		"_id": "email-zh-alert",
		"main_title": "温馨提示",
		"alternate_title": "洞视提示，有新的消息被触发",
		"action_body": "查看您的数据",
		"main_body": "您有一条新提示：{alert_name}, 我们发现您的数据最近被改变!"
	},
	{
		"_id": "email-zh-confirm",
		"main_title": "欢迎加入洞视",
		"alternate_title": "欢迎加入洞视",
		"action_body": "设置密码",
		"main_body": "请点击以下按钮设置您的密码。如非您本人操作，请\n<a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-zh-notify",
		"main_title": "账户信息更新",
		"alternate_title": "账户信息更新",
		"action_body": "查看您的账户设置",
		"main_body": "{alternate_account} 被加入作为您的洞视新登录账号和联系方式. 如非您本人操作，请\n<a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-zh-reset",
		"main_title": "密码改变确认提示",
		"alternate_title": "密码改变确认提示",
		"action_body": "设置密码",
		"main_body": "请点击以下按钮设置您的新密码。如非您本人操作，请 <a href=\"mailto:success@vadata.cn\" style=\"box-sizing: border-box; color: #348eda; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.428571429; margin: 0; text-decoration: underline;\">联系我们</a>。"
	},
	{
		"_id": "email-zh-verify",
		"main_title": "账户信息改变确认提示",
		"alternate_title": "账户信息改变确认提示",
		"action_body": "确认账号",
		"main_body": "请点击以下按钮来确认此账号 {alternate_account} 作为您在洞视的另外的登入账号以及联系方式"
	}
]
docs.forEach(function (doc) {
	db.getSiblingDB('app')['template_cemengines'].updateOne(
		{ '_id': doc['_id'] },
		{ '$set': doc },
		{ 'upsert': true }
	);
});

db.getSiblingDB('app')['template_cemengines'].find().sort({ '_id': 1 }).forEach(function (doc) {
	print(doc['_id']);
});
