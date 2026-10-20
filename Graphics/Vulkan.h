#pragma once

#define VK_ENABLE_BETA_EXTENSIONS
#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include "Window.h"
#include "Util.h"

#include <stdexcept>
#include <iostream>
#include <string>
#include <vector>
#include <optional>
#include <set>
#include <cstdint>
#include <limits>
#include <algorithm>
#include <filesystem>

#ifdef MACOS
#define PORTABILITY
#endif

namespace Titan
{
namespace Graphics
{

enum
{
    MAX_GRAPHICS_PIPELINES = 256,
    MAX_FRAMES_IN_FLIGHT = 2,
    TIMESTAMPS_SIZE = MAX_FRAMES_IN_FLIGHT * 2,
    NUM_TIMESTAMP_SAMPLES = 48,
};

class Vulkan
{
public:
    Vulkan(Window* Window);
    ~Vulkan();

    Vulkan(const Vulkan &) = delete;
    Vulkan &operator=(const Vulkan &) = delete;

    float getAvgTiming();
    void resetTimings();
    size_t getNumTimestampSamples();
    void drawFrame(uint32_t graphics_pipeline_index);
    void idle();

    uint32_t getGraphicsPipelineCount() { return graphics_pipelines; }
    std::string getGraphicsPipelineName(uint32_t graphics_pipeline_index) { return graphics_pipeline_names.at(graphics_pipeline_index); }

    Window* window;

    const std::vector<const char*> validationLayers = {
        "VK_LAYER_KHRONOS_validation"
    };

    #ifdef NDEBUG
        const bool enableValidationLayers = false;
    #else
        const bool enableValidationLayers = true;
    #endif

private:
    VkInstance instance;
    VkDebugUtilsMessengerEXT debugMessenger;
    VkSurfaceKHR surface;
    VkPhysicalDevice physicalDevice = VK_NULL_HANDLE;

    struct QueueFamilyIndices
    {
        std::optional<uint32_t> graphicsFamily;
        std::optional<uint32_t> presentFamily;

        bool isComplete() {
            return graphicsFamily.has_value();
        }
    };

    VkDevice device;
    VkQueue graphicsQueue;
    VkQueue presentQueue;

    const std::vector<const char*> deviceExtensions = {
        VK_KHR_SWAPCHAIN_EXTENSION_NAME
    };

    struct SwapChainSupportDetails
    {
        VkSurfaceCapabilitiesKHR capabilities;
        std::vector<VkSurfaceFormatKHR> formats;
        std::vector<VkPresentModeKHR> presentModes;
    };

    VkSwapchainKHR swapChain;
    std::vector<VkImage> swapChainImages;
    VkFormat swapChainImageFormat;
    VkExtent2D swapChainExtent;
    std::vector<VkImageView> swapChainImageViews;

    VkRenderPass renderPass;
    VkPipelineLayout pipelineLayout[MAX_GRAPHICS_PIPELINES];
    VkPipeline graphicsPipeline[MAX_GRAPHICS_PIPELINES];
    uint32_t graphics_pipelines = 0;
    std::vector<std::string> graphics_pipeline_names;

    uint32_t currentFrame = 0;
    std::vector<VkFramebuffer> swapChainFramebuffers;
    VkCommandPool commandPool;
    std::vector<VkCommandBuffer> commandBuffers;

    std::vector<VkSemaphore> imageAvailableSemaphores;
    std::vector<VkSemaphore> renderFinishedSemaphores;
    std::vector<VkFence> inFlightFences;

    VkQueryPool queryPoolTimestamps;
    float timestampPeriod;
    uint64_t timestamps[TIMESTAMPS_SIZE];
    std::vector<uint64_t> timestamp_samples;
    uint64_t prevTimestamp = 0;
    float sumDeltaTimestamp = 0;
    uint32_t numTimestamps = 0;
    uint32_t prev_graphics_pipeline_index = 0u;

    void createInstance();
    void destroyInstance();

    void enumerateExtensions();
    bool checkValidationLayerSupport();
    std::vector<const char*> getRequiredExtensions();
    
    static VKAPI_ATTR VkBool32 VKAPI_CALL debugCallback(VkDebugUtilsMessageSeverityFlagBitsEXT messageSeverity, VkDebugUtilsMessageTypeFlagsEXT messageType, const VkDebugUtilsMessengerCallbackDataEXT* pCallbackData, void* pUserData);
    void setupDebugMessenger();
    VkResult CreateDebugUtilsMessengerEXT(VkInstance instance, const VkDebugUtilsMessengerCreateInfoEXT* pCreateInfo, const VkAllocationCallbacks* pAllocator, VkDebugUtilsMessengerEXT* pDebugMessenger);
    void DestroyDebugUtilsMessengerEXT(VkInstance instance, VkDebugUtilsMessengerEXT debugMessenger, const VkAllocationCallbacks* pAllocator);
    void populateDebugMessengerCreateInfo(VkDebugUtilsMessengerCreateInfoEXT& createInfo);
    void destroyDebugMessenger();

    void pickPhysicalDevice();
    bool isDeviceSuitable(VkPhysicalDevice device);
    QueueFamilyIndices findQueueFamilies(VkPhysicalDevice device);
    void createLogicalDevice();
    void destroyDevice();

    void createSurface();
    void destroySurface();
    bool checkDeviceExtensionSupport(VkPhysicalDevice device);

    SwapChainSupportDetails querySwapChainSupport(VkPhysicalDevice device);
    VkSurfaceFormatKHR chooseSwapSurfaceFormat(const std::vector<VkSurfaceFormatKHR>& availableFormats);
    VkPresentModeKHR chooseSwapPresentMode(const std::vector<VkPresentModeKHR>& availablePresentModes);
    VkExtent2D chooseSwapExtent(const VkSurfaceCapabilitiesKHR& capabilities);
    void createSwapChain();
    void recreateSwapChain();
    void destroySwapChain();

    void createImageViews();
    void destroyImageViews();

    void createGraphicsPipelines();
    void destroyGraphicsPipelines();

    void createGraphicsPipeline(uint32_t graphics_pipeline_index, std::string vert_shader_file, std::string frag_shader_file);
    void destroyGraphicsPipeline(uint32_t graphics_pipeline_index);

    VkShaderModule createShaderModule(const std::vector<char>& code);

    void createRenderPass();
    void destroyRenderPass();

    void createFrameBuffers();
    void destroyFrameBuffers();

    void createCommandPool();
    void destroyCommandPool();

    void createCommandBuffers();
    void recordCommandBuffer(VkCommandBuffer commandBuffer, uint32_t imageIndex, uint32_t graphics_pipeline_index);
    
    void createSyncObjects();
    void destroySyncObjects();

    bool checkTimestampSuppport(VkPhysicalDevice device, QueueFamilyIndices indices);
    void createQueryPool();
    void destroyQueryPool();
};

} // namespace Graphics
} // namespace Titan