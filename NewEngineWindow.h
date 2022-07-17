#pragma once

#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include <string>

namespace NE
{

class NewEngineWindow
{
public:
    NewEngineWindow(int width, int height, std::string name);
    ~NewEngineWindow();

    NewEngineWindow(const NewEngineWindow &) = delete;
    NewEngineWindow &operator=(const NewEngineWindow &) = delete;

    bool ShouldClose() { return glfwWindowShouldClose(window); }

private:
    void initWindow();

    int width;
    int height;

    std::string name;
    GLFWwindow* window;
};

}