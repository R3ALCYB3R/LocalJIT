#import "JITBridge.h"
#import <sys/ptrace.h>
#import <unistd.h>

int JITBridge::triggerJIT() {
    // PT_TRACE_ME tells the kernel this process wants to be debugged.
    // On sideloaded apps, this is the trigger for JIT.
    int result = ptrace(PT_TRACE_ME, 0, NULL, 0);
    
    if (result == 0) {
        printf("LocalJIT: ptrace successful\n");
    } else {
        printf("LocalJIT: ptrace failed with code %d\n", result);
    }
    return result;
}
