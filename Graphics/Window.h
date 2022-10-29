#pragma once

#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include <string>

namespace Titan
{

class Window
{
public:
    Window(int width, int height, std::string name);
    ~Window();

    Window(const Window &) = delete;
    Window &operator=(const Window &) = delete;

    bool ShouldClose() { return glfwWindowShouldClose(glfw_window); }

    GLFWwindow* getWindow() { return glfw_window; }

    bool framebufferResized = false;

private:

    int width;
    int height;

    std::string name;
    GLFWwindow* glfw_window;

};

static void framebufferResizeCallback(GLFWwindow* glfw_window, int width, int height);

} // namespace Titan