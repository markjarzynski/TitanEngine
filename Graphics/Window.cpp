#include "Window.h"

namespace Titan
{
namespace Graphics
{

Window::Window (int Width, int Height, std::string Name)
    : width(Width), height(Height), name(Name)
{
    glfwInit();

    glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);

    GLFWmonitor* glfw_primary_monitor = glfwGetPrimaryMonitor();

    glfw_window = glfwCreateWindow(width, height, name.c_str(), glfw_primary_monitor, nullptr);
    glfwSetWindowUserPointer(glfw_window, this);
    glfwSetFramebufferSizeCallback(glfw_window, framebufferResizeCallback);
}

Window::~Window ()
{
    glfwDestroyWindow(glfw_window);
    glfwTerminate();
}

static void framebufferResizeCallback(GLFWwindow* glfw_window, int width, int height)
{
    Window* window = reinterpret_cast<Window*>(glfwGetWindowUserPointer(glfw_window));
    window->framebufferResized = true;
}

} // namespace Graphics
} // namespace Titan