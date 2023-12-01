using Newtonsoft.Json;

namespace Kaiser.Utility
{
    public static class Tools
    {
        public static string JsonResult(object result, string? msg = null, bool? showBanner = false)
        {
            return JsonConvert.SerializeObject(new { Data = result, Message = msg ?? "Ejecutado correctamente.", ShowBanner = showBanner });
        }
    }
}
