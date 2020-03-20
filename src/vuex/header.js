import Vue from 'vue'
import { hex_sha1 } from '../vuex/sha1.js'
import md5 from '../vuex/md5.js'
//import common from '/src/vuex/common.vue'
const appkey = '89c3fac0f934';
const appsecret = '8781eaf0d41e15a6cb128bd2834487bc';

export function getHeader () {
	var timestamp = Date.parse(new Date())
	timestamp = timestamp / 1000
	var md5_str = $.md5('b64MD5' + timestamp)
	var header = {
		'content-Type': 'application/x-www-form-urlencoded',
		'APPKEY': appkey,
		'CURTIME': timestamp,
		'MD5': md5_str,
		'CHECKSUM': hex_sha1(appsecret + md5_str + timestamp)
	}
	return header;
}
	