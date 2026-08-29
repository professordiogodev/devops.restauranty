resource "azurerm_resource_group" "rg_shishir" {
  name     = "res-rg-shishir"
  location = "Belgium Central"
}
resource "azurerm_container_registry" "acr_shishir" {
  name                = "restaurantyacrshishir"
  resource_group_name = azurerm_resource_group.rg_shishir.name
  location            = azurerm_resource_group.rg_shishir.location
  sku                 = "Basic"
  admin_enabled       = true
}
resource "azurerm_kubernetes_cluster" "aks_shishir" {
    name = "restauranty-aks-shishir" 
    location = azurerm_resource_group.rg_shishir.location
    resource_group_name = azurerm_resource_group.rg_shishir.name
    dns_prefix = "restauranty"

    default_node_pool {
      name = "default"
      node_count = 1
      vm_size = "Standard_B2s"
    }

    identity {
      type = "SystemAssigned"
    
    }
    tags = {
      Environment = "Development"
    }
    }
  
