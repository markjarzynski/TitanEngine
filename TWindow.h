#pragma once

#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include <string>

namespace Titan
{

class TWindow
{
public:
    TWindow(int width, int height, std::string name);
    ~TWindow();

    TWindow(const TWindow &) = delete;
    TWindow &operator=(const TWindow &) = delete;

    bool ShouldClose() { return glfwWindowShouldClose(window); }

    GLFWwindow* getWindow() { return window; }

    bool framebufferResized = false;

private:

    int width;
    int height;

    std::string name;
    GLFWwindow* window;

};

static void framebufferResizeCallback(GLFWwindow* window, int width, int height);

} // namespace Titan