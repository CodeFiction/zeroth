import { Injectable, Injector } from '@angular/core';
import { RemoteCli, ConnectedSocketCallback } from './remoteCli.service';
import { Logger } from '../../common/services/logger.service';
import { Service } from '../../common/registry/decorators';

import Spy = jasmine.Spy;

@Injectable()
@Service()
export class RemoteCliMock extends RemoteCli {

  constructor(loggerBase: Logger, injector: Injector) {
    super(loggerBase, injector)
  }

  protected registerCommands(): this {
    return this;
  }

  public start(port: number, callback?: ConnectedSocketCallback): this {
    return this;
  }

  /**
   * This overrides the parent method so that vantage is not initialised in tests
   * @returns {RemoteCliMock}
   */
  public initialize(): this {
    return this.registerCommands();
  }

}