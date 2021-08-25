# -*- coding: utf-8 -*-
# @Time    : 2020/6/29 14:13
# @Author  : AaronJny
# @File    : settings.py
# @Desc    :

# 测试脚本默认的模型权重路径
DEFAULT_MODEL_PATH = 'data/weights/batch16epoch20.h5'
# 默认的anchors box路径
DEFAULT_ANCHORS_PATH = 'data/anchors/coco_anchors.txt'
# 默认的类别文本路径
DEFAULT_CLASSES_PATH = 'data/classes/voc_classes.txt'
# 模型置信度阈值，低于阈值的box将被忽略
SCORE = 0.08
# IOU阈值
IOU = 0.08
# 模型默认图片大小，如果你不清楚这一项的实际用途，请千万不要修改它
MODEL_IMAGE_SIZE = (416, 416)
# GPU数量
GPU_NUM = 1

