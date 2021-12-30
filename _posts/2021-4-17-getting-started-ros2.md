---
layout: post
title: Getting Started with ROS2
image: img/getting_started_ros2/cover.png
tags: [Python, ROS2, Nav2, Cartographer]
customlink: true
customlinktitle: GitHub
customlinkaddress: https://github.com/iamarkaj/JdeRobot-GSoC-Challenges/tree/main/ROS2%20Challenge
author: ajb
---


Demo of Publisher/Subscriber and ROS2 Navigation2.


## OVERVIEW 


# Part 1: Introduction to ROS2


## a. 'Hello! ROS2 is fun'


### Creating workspace

```
mkdir -p ros2_ws/src && cd ros2_ws
source /opt/ros/foxy/setup.bash
colcon build
source install/local_setup.bash && source install/setup.bash
```

### Downloading the packages

Download ROS2 Challenge folder inside ros2_ws/src

### Building packages using colcon

```
colcon build --symlink-install --packages-select <package_name>
. install/setup.bash
```

### Running talker

```
ros2 run pubsub_py talker
```

### Running listener

```
ros2 run pubsub_py listener
```

<div class="post-flex-display">
    <img src="/img/getting_started_ros2/pubsub_py.png" width="600" height="300" alt="diagram">
</div>


## b. Launch your robot


### Visualization of the laser scan data using rviz2

<div class="post-flex-display">
    <img src="/img/getting_started_ros2/laser_scan.png" width="600" height="300" alt="diagram">
</div>


[Click here](https://www.youtube.com/watch?v=DjI-VWtPRd0) to watch the video.

 
# Part 2: ROS2 Navigation2


```
echo 'source ~/ros2_ws/install/setup.bash' >> ~/.bashrc
echo 'export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:~/ros2_ws/src/turtlebot3/turtlebot3_simulations/turtlebot3_gazebo/models' >> ~/.bashrc
export TURTLEBOT3_MODEL=burger
```

## Launching gazebo

```
ros2 launch turtlebot3_gazebo mylaunch.launch.py
```

## Making the map

<div class="post-flex-display">
    <img src="/img/getting_started_ros2/map.png" width="600" height="300" alt="diagram">
</div>

[Click here](https://www.youtube.com/watch?v=FBW4gHa-DPU) to watch the video.

```
ros2 launch turtlebot3_cartographer cartographer.launch.py
```

## Move the robot using keyboard keys

```
ros2 run turtlebot3_teleop teleop_keyboard
```

## Saving the map

```
ros2 run nav2_map_server map_saver_cli --ros-args -p save_map_timeout:=10000
```

## Finally

<div class="post-flex-display">
    <img src="/img/getting_started_ros2/final.png" width="600" height="300" alt="diagram">
</div>

[Click here](https://youtu.be/JV2rbXceeOA) to watch the video.

```
ros2 launch turtlebot3_navigation2 navigation2.launch.py map:=$HOME/<ros2_ws_path>/src/<map_name>.yaml open_rviz:=true use_sim_time:=true
``` 
