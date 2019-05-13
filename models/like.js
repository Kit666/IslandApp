import { HTTP } from '../util/http.js'

// art_id: 点赞对象, 例如你想对电影进行点赞，那这个参数就是电影的id号
// category: type：点赞类型分为四种：100 电影 200 音乐 300 句子 400 书籍
class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior == "like" ? "like" : "like/cancel"
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: artID,
        type: category
      }
    }) 
  }
}

export { LikeModel }
