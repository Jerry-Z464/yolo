# -*- coding: utf-8 -*-
import os
import json
import time
from flask import Flask, request
from yolo import YOLO, detect_video
from PIL import Image

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__)) # 获取当前文件所在的路径
#图片检测
@app.route('/getimage', methods=['GET', 'POST'])
def uploadimage():
    if request.method == 'POST':
        path = basedir + "/static/" + "new.jpg" # 定义保存路径
        #获取前端上传的图片
        f = request.files.get('file')
        # f=request.files.list['file']
        f.save(path) # 将获取的图片保存在后端文件夹

        # 跳转detect_image，封装的检测函数
        def detect_img(yolo):
             img = path # 通过保存路径读取图片
             image = Image.open(img)
             r_image = yolo.detect_image(image) # 封装的检测函数
             return r_image # 返回检测成功的图片
        savepath = "/static/" + "result.jpg" # 定义保存检测图片的路径
        imgpath = basedir + "/static/" + "result.jpg"
        a = detect_img(YOLO())
        a.save(imgpath) # 保存

    return json.dumps({"ok": savepath}) # 返回检测图片路径到前端
# 检测视频
@app.route('/getvideo', methods=['GET', 'POST'])
def uploadvideo():
    if request.method == 'POST':
        Vpath = basedir + "/static/" + "new.mp4"
        #获取前端上传的视频
        f = request.files.get("file")
        # print(time.ctime())
        f.save(Vpath)
        # time.sleep(10)
        # 跳转detect_video
        # path = Vpath
        savepath = "/static/" + "new1.mp4"
        output = basedir + "/static/" + "new1.mp4"
        detect_video(YOLO(), video_path=Vpath, output_path=output)
    return json.dumps({"ok": savepath})



if __name__ == '__main__':
    app.run(host='127.0.0.1', port='8090')  # 本机，8090端口
