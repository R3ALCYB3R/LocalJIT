import Foundation
import SwiftUI

class LocalJIT: ObservableObject {
    static let shared = LocalJIT()
    
    @Published var isActive: Bool = false
    @Published var statusMessage: String = "JIT Ready"

    func enable() {
        // This calls the C++ function in our Bridge to trigger ptrace
        let result = JITBridge.triggerJIT()
        
        DispatchQueue.main.async {
            if result == 0 {
                self.isActive = true
                self.statusMessage = "JIT ENABLED"
            } else {
                self.isActive = false
                self.statusMessage = "JIT FAILED (Code: \(result))"
            }
        }
    }
}
